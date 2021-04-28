// controllers only deal with http, they don't actually do anything, they only know how to respond to a url, but they don't hold data, the service is responsible for holding the data

// thus we need to import the service thusly
const quizzesService = require('../services/quizzes/quiz-service')

module.exports = (app) => {

    const findAllQuizzes = (req, res) => {
        // this below is a synchronous call meaning quizzes doesn't have a value until the RHS call comes back and returns something to it
        // since find() in the service is ASYNCHRONOUS, quizzes isn't actually receiving the quizzes, it's receiving a promise, so we're going to comment out and rewrite it so that it's asynchronous

        // THIS IS THE SYNCHRONOUS VERSION
        // const quizzes = quizzesService.findAllQuizzes()
        // res.send(quizzes)

        // THIS IS THE ASYNCHRONOUS VERSION
        quizzesService.findAllQuizzes()
            .then((quizzes) => {
                res.send(quizzes)
            })
    }

    const findQuizById = (req, res) => {
        const quizId = req.params['qid']
        // const quiz = quizzesService.findQuizById(quizId)
        // res.send(quiz)
        quizzesService.findQuizById(quizId)
            .then((quiz) => {
                res.send(quiz)
            })
    }

    // returns all the quizzes
    app.get("/api/quizzes", findAllQuizzes)

    // returns quiz by id
    app.get("/api/quizzes/:qid", findQuizById)
}