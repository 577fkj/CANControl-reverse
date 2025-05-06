#@author 577fkj
#@keybinding 
#@menupath 
#@toolbar

from ghidra.program.model.address import Address

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
    # Get the function containing the call instruction
    func = getFunctionContaining(call_addr)
    if not func:
        print("Cannot find function containing address: " + str(call_addr))
        return
    
    process = False
    for name in process_function:
        if name in func.getName():
            process = True
            break
    
    if not process:
        return

    # Look for the instruction before the call (which stores parameters in registers)
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
                print("Call at " + str(call_addr))
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
                print("Call at " + str(call_addr))
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
    This function retrieves the address stored in a specified register (a10, a11, a12) by backtracking the instructions.
    """
    # Initialize the register_value to None
    register_value = None

    # Traverse the instruction chain to find the register value
    while inst:
        if inst.getMnemonicString() in set_command:  # These are common instructions that load values into registers
            if str(inst.getOpObjects(0)[0]) == register:
                register_value = inst.getOpObjects(1)
        if register_value:
            break
        inst = getInstructionBefore(inst.getAddress())  # Move backward to the previous instruction

    # If we found a valid register value (and it's an Address), return it
    if register_value and isinstance(register_value[0], Address):
        return register_value[0]  # Return the Address object
    return None


def rename_function(func, new_name):
    """
    Rename the function with the new name extracted from the parameters.
    """

    address = str(func.getEntryPoint())
    path_info = paths[address]

    if not path_info:
        print("==============================================")
        print("Function: " + address)
        print("Old name: " + func.getName())
        print("New name: " + new_name)
        print("==============================================")
        raise Exception("Path not found")

    # print("==============================================")
    # print("Function: " + address)
    # print("Old name: " + func.getName())
    # if path_info:
    #     print("Path: " + path_info['path'])
    #     print("Is cpp: " + str(path_info['is_cpp']))
    # else:
    #     print("Path: None")
    # print("New name: " + new_name)
    # print("==============================================")
    # return

    if path_info['is_cpp']:
        class_name = path_info['path'].split("/")[-1].split(".")[0]

        new_name = class_name + "::" + new_name

        comment = "\n"
        comment += "Function: " + new_name + "\n"
        comment += "Path: " + path_info['path'] + "\n"
        comment += "Is cpp: " + str(path_info['is_cpp']) + "\n"
        print(comment)
        func.setComment(comment)
    
    try:
        func.setName(new_name, ghidra.program.model.symbol.SourceType.USER_DEFINED)
        print("Function at " + str(func.getEntryPoint()) + " renamed to " + new_name)
    except Exception as e:
        print("Renaming failed: " + str(e))

def find_all_path(func):
    references = getReferencesTo(func.getEntryPoint())
    print("Found " + str(len(references)) + " references to " + func.getName())
    for ref in references:
        inst = getInstructionAt(ref.getFromAddress())
        if inst and inst.getMnemonicString().startswith("call"):
            parse_assert_parameters(ref.getFromAddress())

paths = {}

def process_path(func, path):
    address = str(func.getEntryPoint())

    # print("==============================================")
    # print("Function: " + address)
    # print("Path: " + path)
    # print("==============================================")
    
    if address in paths:
        if paths[address]['path'] != path:
            print("==============================================")
            print("Function: " + address)
            print("Path: " + path)
            print("Old Info: " + paths[address]['path'])
            print("==============================================")
            return
    
    paths[address] = {
        "path": path,
        "is_cpp": path.endswith(".cpp")
    }

def main():
    path_to_file_name_function = find_function(path_to_file_name)
    if path_to_file_name_function:
        print("Found pathToFileName at " + str(path_to_file_name_function.getEntryPoint()))
        call = get_calls_to_function(path_to_file_name_function)
        for ref in call:
            parse_assert_parameters(ref, path_to_file_name_register, process_path)
    else:
        print("Could not find pathToFileName")
    
    wrap_log_printf_function = find_function(wrap_log_printf)
    if wrap_log_printf_function:
        print("Found __wrap_log_printf at " + str(wrap_log_printf_function.getEntryPoint()))
        
        call = get_calls_to_function(wrap_log_printf_function)
        for ref in call:
            parse_assert_parameters(ref, function_name_register, rename_function)
    else:
        print("Could not find __wrap_log_printf")

main()
