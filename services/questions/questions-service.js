// const questions = require("./questions.json")
const questionsModel = require("../../models/questions/questions-model")


const questionsDao = require('../../daos/questions-dao')


const createQuestion = () => {}

const createQuestionForQuiz = () => {}

const deleteQuestion = () => {}

const findAllQuestions = () => {
    return questionsModel.find()
}

const findQuestionsForQuiz = (quizId) => {
    return questionsModel.find({quizId: quizId})
}

const findQuestionById = (questionId) => {
    return questionsModel.findById(questionId)
}

const updateQuestion = () => {}

module.exports = {
    createQuestion,
    createQuestionForQuiz,
    deleteQuestion,
    findAllQuestions,
    findQuestionsForQuiz,
    findQuestionById,
    updateQuestion
}