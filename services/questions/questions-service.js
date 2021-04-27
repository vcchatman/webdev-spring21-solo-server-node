const questions = require("./questions.json")


const createQuestion = () => {}

const createQuestionForQuiz = () => {}

const deleteQuestion = () => {}

const findAllQuestions = () => {
    return questions
}

const findQuestionsForQuiz = (quizId) => {
    return questions.filter((question) => {
        return (question.quizId === quizId)
    })
}

const findQuestionById = (questionId) => {
    return questions.find((question) => {
        return (question._id === questionId)
    })
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