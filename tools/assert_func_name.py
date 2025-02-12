#@author 577fkj
#@keybinding 
#@menupath 
#@toolbar

from ghidra.program.model.address import Address

assert_func = "__assert_func"
set_command = ["l32r", "mov", "movi"]
function_name_register = 'a12'

def find_assert_func():
    """
    Find the address of __assert_func function.
    """
    fm = currentProgram.getFunctionManager()
    for func in fm.getFunctions(True):
        if func.getName() == assert_func:
            return func
    return None

def get_assert_func_calls(assert_func):
    """
    Retrieve calls to __assert_func and parse their parameters.
    """
    references = getReferencesTo(assert_func.getEntryPoint())
    print("Found " + str(len(references)) + " references to __assert_func")
    for ref in references:
        inst = getInstructionAt(ref.getFromAddress())
        if inst and inst.getMnemonicString().startswith("call"):
            parse_assert_parameters(ref.getFromAddress())

def parse_assert_parameters(call_addr):
    """
    Parse the parameters passed to __assert_func.
    """
    # Get the function containing the call instruction
    func = getFunctionContaining(call_addr)
    if not func:
        print("Cannot find function containing address: " + str(call_addr))
        return
    
    if not func.getName().startswith("FUN_"):
        return

    # if "::" not in func.getName():
    #     return

    # Look for the instruction before the call (which stores parameters in registers)
    prev_inst = getInstructionBefore(call_addr)
    
    if not prev_inst:
        print("Cannot find instruction before call at " + str(call_addr))
        return

    # Check the register values of a10, a11, a12 to get the parameters
    # registers = ['a10', 'a11', 'a12']
    reg_value = get_register_value_from_instruction_chain(prev_inst, function_name_register)
    if reg_value:
        # Extract the address where the function name is stored
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
                rename_function(func, function_name)
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

    is_cpp_method = "(" in new_name
    if is_cpp_method:
        # void NimBLEAttValue::deepCopy(const NimBLEAttValue&)
        # int __cxa_guard_acquire(__cxxabiv1::__guard*)
        is_static = False
        start, params = new_name.split("(")
        
        sp = start.split(" ")
        if sp[0] == "static":
            is_static = True
            sp = sp[1:]
        
        if len(sp) == 2:
            return_type = sp[0]
            func_name = sp[1]
        else:
            return_type = sp[0]
            func_name = sp[0]

        if "::" in func_name:
            class_name, func_name = func_name.split("::")
        else:
            class_name = ""

        params = params.replace(")", "")

        if (class_name):
            new_name = class_name + "::" + func_name
        else:
            new_name = func_name

        full_name = return_type + " " + new_name + "(" + params + ")"
        if is_static:
            full_name = "static " + full_name

        comment = "\n"
        comment += "Class: " + class_name + "\n"
        comment += "Function: " + func_name + "\n"
        comment += "Static: " + str(is_static) + "\n"
        comment += "Parameters: " + params + "\n"
        comment += "Return type: " + return_type + "\n"
        comment += "Full name: " + full_name + "\n"
        print(comment)
        func.setComment(comment)
    try:
        func.setName(new_name, ghidra.program.model.symbol.SourceType.USER_DEFINED)
        print("Function at " + str(func.getEntryPoint()) + " renamed to " + new_name)
    except Exception as e:
        print("Renaming failed: " + str(e))

def main():
    assert_func = find_assert_func()
    if assert_func:
        print("Found __assert_func at " + str(assert_func.getEntryPoint()))
        get_assert_func_calls(assert_func)
    else:
        print("Could not find __assert_func")

main()
