const { spawn } = require('child_process');

// const childPython = spawn('python', ['--version']);
const childPython = spawn('python3', ["BI_Connectors.py"]);

childPython.stdout.on('data', (data) => {
    console.log("stdout: " + data);
});

childPython.stderr.on('data', (data) => {
    console.error("stderr:" + data);
});

childPython.on('close', (code) => {
    console.log("child process exited with code " + code);
})
