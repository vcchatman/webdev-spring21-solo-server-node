module.exports = (app) => {

    const questionService = require("../services/questions/questions-service")

    const findAllQuestions = (req, res) => {
        questionService.findAllQuestions()
            .then((questions) => {
                res.send(questions)
            })
    }

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params.quizId
        // const questions = questionService.findQuestionsForQuiz(quizId)
        // res.send(questions)
        questionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                res.send(questions)
            })
    }

    app.get("/api/questions", findAllQuestions); // RESTful convention
    app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz)
}