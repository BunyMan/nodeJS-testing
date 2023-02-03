const spawner = require('child_process').spawn;


//object
const data_to_pass_in = {
    data_sent: "data for the python script",
    data_returned: undefined
};

//checking data to send to python script
console.log("Data sent to python script: ", data_to_pass_in);

//sending the data to the python script and running it with the data sent as arguments
const python_process = spawner('python', ["./argsTest4.py", JSON.stringify(data_to_pass_in)]);

//printing the data received from the python file
python_process.stdout.on('data', (data) => {
    console.log('Data received from python script: ', JSON.parse(data.toString()));
});