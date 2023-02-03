const spawner = require('child_process').spawn;


//string
const data_to_pass_in = "data for the python script.";

console.log("Data sent to python script: ", data_to_pass_in);

const python_process = spawner('python3', ['./argsTest2.py', data_to_pass_in]);

python_process.stdout.on('data', (data) => {
    console.log("Data received from python: ", data.toString());
});
