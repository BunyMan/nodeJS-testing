import sys
import json
import ast #abstract syntax tree

data_to_pass_back = "Data to send back to node."

#list
input = ast.literal_eval(sys.argv[1])
output = input
output.append(data_to_pass_back)
print(json.dumps(output))

sys.stdout.flush()