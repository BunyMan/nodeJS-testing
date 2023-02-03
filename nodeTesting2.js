const { PythonShell } = require('python-shell')

let options={
    scriptPath:"C:/Users/jbuny/Documents/urt-routines/strapiPythonTesting",
    args:["Teste", 1],
}

PythonShell.run("argsTest.py", options, (err, res)=> {
    if (err) console.log(err)
    if (res) console.log(res)
})