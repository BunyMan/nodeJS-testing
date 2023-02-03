const spawner = require('child_process').spawn;

//array
const data_to_pass_in = ["data for the python script"];

console.log("Data sent to python script: ", data_to_pass_in);

const python_process = spawner('python3', ["./argsTest3.py", JSON.stringify(data_to_pass_in)]);

python_process.stdout.on('data', (data) => {
    console.log('Data received from python script: ', JSON.parse(data.toString()));
});
