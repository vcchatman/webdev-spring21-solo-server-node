// controllers only deal with http, they don't actually do anything, they only know how to respond to a url, but they don't hold data, the service is responsible for holding the data

// thus we need to import the service thusly
const quizzesService = require('../services/quizzes/quiz-service')

module.exports = (app) => {

    const findAllQuizzes = (req, res) => {
        const quizzes = quizzesService.findAllQuizzes()
        res.send(quizzes)
    }

    const findQuizById = (req, res) => {
        const quizId = req.params['qid']
        const quiz = quizzesService.findQuizById(quizId)
        res.send(quiz)
    }

    // returns all the quizzes
    app.get("/api/quizzes", findAllQuizzes)

    // returns quiz by id
    app.get("/api/quizzes/:qid", findQuizById)
}