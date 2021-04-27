module.exports = (app) => {

    // req and res can be any two variable names
    const add = (req, res) => {
        const a = parseInt(req.params['paramA']);
        const b = parseInt(req.params['paramB']);
        // when browser sends an int, it confuses it with the int that is an error code, so we sent the response as an expression instead of an int
        res.send(`${a + b}`);
    }

    // http://localhost:3000/subtract?x=4&y=7
    const subtract = (req, res) => {
        const x = parseInt(req.query['x']);
        const y = parseInt(req.query['y']);
        const z = x - y;
        res.send(`${z}`)
    }

    // if the server sees the url that matches the first get arg, it will execute the 2nd arg which is a function
    // req = request arg, res = response arg
    // request allows you to read what's coming from wherever
    // response allows us to send something back as a response
    app.get('/', function (req, res) { // app provides the api for working w/HTTP
        res.send('Hello World')
    })

    // pass arguments in the path
    app.get('/add/:paramA/:paramB', add)

    // pass arguments as queries, as opposed to paths
    app.get('/subtract', subtract)

}

