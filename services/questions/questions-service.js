// const questions = require("./questions.json")
const questionsModel = require("../../models/questions/questions-model")


const createQuestion = () => {}

const createQuestionForQuiz = () => {}

const deleteQuestion = () => {}

const findAllQuestions = () => {
    return questionsModel.find()
}

const findQuestionsForQuiz = (quizId) => {
    // return questions.filter((question) => {
    //     return (question.quizId === quizId)
    // })
    return questionsModel.find({quizId: quizId})
}

const findQuestionById = (questionId) => {
    // return questions.find((question) => {
    //     return (question._id === questionId)
    // })
    return questionsModel.findById(questionId)
}

const updateQuestion = () => {}

module.exports = {
    createQuestion,
    createQuestionForQuiz,
    deleteQuestion,
    findAllQuestions,
    findQuestionsForQuiz,
    findQuestionById: findQuestionById,
    updateQuestion
}