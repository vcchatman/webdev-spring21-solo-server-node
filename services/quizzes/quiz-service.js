// const quizzes = require('./quizzes.json')
const quizzesModel = require("../../models/quizzes/quizzes-model")

const createQuiz = () => {
}

const deleteQuiz = () => {
}

const findAllQuizzes = () => {
    // return quizzes
    // this return is synchronous meaning: the execution doesn't stop (stops waiting to have this data?) until i'm ready to return this
    // .find() is asynchronous however, it returns a promise, so in the controller, you're not getting the actual quizzes, you're getting the promise.
    return quizzesModel.find()
}

const findQuizById = (qid) => {
    return quizzesModel
        .findById(qid)
        .populate("questions")
        .exec()
    // return quizzes.find((quiz) => {
    //     return (quiz._id === qid)
    // })
}

const updateQuiz = () => {
}

module.exports = {
    createQuiz,
    deleteQuiz,
    findAllQuizzes,
    findQuizById,
    updateQuiz
}