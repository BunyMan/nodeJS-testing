import sys
import json
import ast #abstract syntax tree


data_to_pass_back = "Data to send back to node."
test = "test with special characters « »"


#dict
input = ast.literal_eval(sys.argv[1])
output = input
output['data_returned'] = data_to_pass_back
output['creating_a_new_key'] = test
print(json.dumps(output))


sys.stdout.flush()