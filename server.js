const express = require('express') // require means import
const app = express() // app is now an instance of the express library

const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost:27017/whiteboard-01',
    {useNewUrlParser: true, useUnifiedTopology: true}
    );


// this configures CORS
app.use(function (
    req,
    res, next
) {
    res.header(
        'Access-Control-Allow-Origin',
        '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


const demos = require('./controllers/demo-controller')

demos(app)

// const quizzesController = require('./controllers/quizzes-controller')
// quizzesController(app)

// this below is the same thing as above but more terse. this require is bound to a function. so the LHS evaluates to the function module.exports(app) from the quizzesController. And it takes in an app as argument and that's what we're giving it
require("./controllers/quizzes-controller")(app)
require("./controllers/questions-controller")(app)

app.listen(3000) // sets up the server

