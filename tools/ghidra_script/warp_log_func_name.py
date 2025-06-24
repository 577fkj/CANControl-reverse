#@author 577fkj
#@keybinding 
#@menupath 
#@toolbar

from ghidra.program.model.address import Address
from ghidra.program.model.symbol import SourceType, SymbolType
from ghidra.util.exception import InvalidInputException

wrap_log_printf = "__wrap_log_printf"
set_command = ["l32r", "mov", "movi"]
function_name_register = 'a14'

path_to_file_name = "pathToFileName"
path_to_file_name_register = 'a10'

process_function = ['FUN_']

def find_function(name):
    """
    Find the address of a function by its name.
    """
    fm = currentProgram.getFunctionManager()
    for func in fm.getFunctions(True):
        if func.getName() == name:
            return func
    return None

def get_calls_to_function(func):
    """
    Retrieve calls to the given function and parse their parameters.
    """
    result = []
    references = getReferencesTo(func.getEntryPoint())
    print("Found " + str(len(references)) + " references to " + func.getName())
    for ref in references:
        inst = getInstructionAt(ref.getFromAddress())
        if inst and inst.getMnemonicString().startswith("call"):
            result.append(ref.getFromAddress())
    return result

def parse_assert_parameters(call_addr, register, cb):
    """
    Parse the parameters passed to __wrap_log_printf.
    """
    func = getFunctionContaining(call_addr)
    if not func:
        print("Cannot find function containing address: " + str(call_addr))
        return
    
    process = False
    for name in process_function:
        if name in func.getName():
            process = True
            break
    
    if len(process_function) == 0:
        process = True
    
    if not process:
        return

    prev_inst = getInstructionBefore(call_addr)
    
    if not prev_inst:
        print("Cannot find instruction before call at " + str(call_addr))
        return

    reg_value = get_register_value_from_instruction_chain(prev_inst, register)
    if reg_value:
        str_addr = reg_value
        string_data = getDataAt(str_addr)
        if string_data:
            if not string_data.isPointer():
                print("==============================================")
                print("Function: " + str(func.getEntryPoint()))
                print("Call at: " + str(call_addr))
                print("Data at " + str(str_addr) + " is not a pointer")
                print("==============================================")
                return

            string_address = string_data.getValue()
            function_name = read_c_string(string_address)
            if function_name:
                cb(func, function_name)
            else:
                print("==============================================")
                print("Function: " + str(func.getEntryPoint()))
                print("Call at: " + str(call_addr))
                print("No string found at " + str(string_address))
                print("==============================================")

def read_c_string(address):
    """
    Read a null-terminated C string from memory.
    """
    memory = currentProgram.getMemory()
    string_data = ""
    while True:
        byte = memory.getByte(address)
        if byte == 0:
            break
        string_data += chr(byte)
        address = address.add(1)
    return string_data

def get_register_value_from_instruction_chain(inst, register):
    """
    This function retrieves the address stored in a specified register by backtracking the instructions.
    """
    register_value = None
    while inst:
        if inst.getMnemonicString() in set_command:
            if str(inst.getOpObjects(0)[0]) == register:
                register_value = inst.getOpObjects(1)
        if register_value:
            break
        inst = getInstructionBefore(inst.getAddress())
    
    if register_value and isinstance(register_value[0], Address):
        return register_value[0]
    return None

def sanitize_namespace_name(name):
    """
    Sanitize namespace name to be valid in Ghidra
    """
    # Remove invalid characters
    valid_chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_"
    sanitized = ''.join(c for c in name if c in valid_chars)
    
    # Ensure it starts with a letter or underscore
    if sanitized and sanitized[0] not in "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_":
        sanitized = "_" + sanitized
    
    # Truncate if too long
    if len(sanitized) > 100:
        sanitized = sanitized[:100]
    
    return sanitized

def get_or_create_namespace(name):
    """
    Get or create a namespace with the given name
    """
    # Sanitize the namespace name
    sanitized_name = sanitize_namespace_name(name)
    if not sanitized_name:
        return None
    
    symbol_table = currentProgram.getSymbolTable()
    global_namespace = currentProgram.getGlobalNamespace()
    
    # Check if namespace already exists
    namespace = find_namespace(sanitized_name, global_namespace)
    if namespace:
        return namespace
    
    # Create new namespace if not found
    try:
        namespace = symbol_table.createNameSpace(global_namespace, sanitized_name, SourceType.USER_DEFINED)
        return namespace
    except InvalidInputException:
        print("Failed to create namespace '" + sanitized_name + "' - using global namespace")
        return global_namespace
    except Exception as e:
        print("Error creating namespace '" + sanitized_name + "': " + str(e))
        return None

def find_namespace(name, parent_namespace):
    """
    Find a namespace by name under a parent namespace
    """
    symbol_table = currentProgram.getSymbolTable()
    symbols = symbol_table.getSymbols(name, parent_namespace)
    
    for symbol in symbols:
        if symbol.getSymbolType() == SymbolType.NAMESPACE:
            return symbol.getObject()
    
    return None

def rename_function(func, new_name):
    """
    Rename function and set namespace based on path information
    """
    address = str(func.getEntryPoint())
    path_info = paths.get(address)
    
    if not path_info:
        print("Skipping function at " + address + ": No path info found")
        return
    
    try:
        if path_info['is_cpp']:
            # Extract class name from file path
            file_name = path_info['path'].split("/")[-1]
            class_name = file_name.split(".")[0]
            
            # Create or get namespace for the class
            namespace = get_or_create_namespace(class_name)
            
            # Set function name
            func.setName(new_name, SourceType.USER_DEFINED)
            
            # Set parent namespace if valid
            if namespace and namespace != func.getParentNamespace():
                try:
                    func.setParentNamespace(namespace)
                except InvalidInputException:
                    print("Cannot set namespace for function at " + str(func.getEntryPoint()) + 
                          " - using existing namespace")
            
            comment = "Function: " + new_name + "\n"
            comment += "Class: " + class_name + "\n"
            comment += "Path: " + path_info['path'] + "\n"
            func.setComment(comment)
            
            print("Function at " + str(func.getEntryPoint()) + 
                  " renamed to " + new_name + 
                  " in namespace " + class_name)
        else:
            # For non-CPP files, just rename the function
            func.setName(new_name, SourceType.USER_DEFINED)
            print("Function at " + str(func.getEntryPoint()) + 
                  " renamed to " + new_name)
            
    except InvalidInputException as e:
        print("Invalid input for function at " + str(func.getEntryPoint()) + ": " + str(e))
    except Exception as e:
        print("Renaming failed for function at " + str(func.getEntryPoint()) + ": " + str(e))

paths = {}

def process_path(func, path):
    address = str(func.getEntryPoint())
    
    if address in paths:
        if paths[address]['path'] != path:
            print("Conflicting path for function at " + address + ":")
            print("  New path: " + path)
            print("  Old path: " + paths[address]['path'])
            return
    
    paths[address] = {
        "path": path,
        "is_cpp": path.endswith(".cpp") or path.endswith(".cxx") or path.endswith(".cc") or path.endswith(".h")
    }

def main():
    path_to_file_name_function = find_function(path_to_file_name)
    if path_to_file_name_function:
        print("Found pathToFileName at " + str(path_to_file_name_function.getEntryPoint()))
        calls = get_calls_to_function(path_to_file_name_function)
        for call in calls:
            parse_assert_parameters(call, path_to_file_name_register, process_path)
    else:
        print("Could not find pathToFileName")
    
    wrap_log_printf_function = find_function(wrap_log_printf)
    if wrap_log_printf_function:
        print("Found __wrap_log_printf at " + str(wrap_log_printf_function.getEntryPoint()))
        calls = get_calls_to_function(wrap_log_printf_function)
        for call in calls:
            parse_assert_parameters(call, function_name_register, rename_function)
    else:
        print("Could not find __wrap_log_printf")

main()