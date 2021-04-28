
const quizzes = require('./quizzes.json')
const quizzesModel = require("../../db/quizzes/quizzes-model")

const createQuiz = () => {}

const deleteQuiz = () => {}

const findAllQuizzes = () => {
    // return quizzes
    return quizzesModel.find()
}

const findQuizById = (qid) => {
    return quizzes.find((quiz) => {
        return (quiz._id === qid)
    })
}

const updateQuiz = () => {}

module.exports = {
    createQuiz,
    deleteQuiz,
    findAllQuizzes,
    findQuizById,
    updateQuiz
}