const questionsDao = require('../../daos/questions-dao')

const createQuestion = () => {}

const createQuestionForQuiz = () => {}

const deleteQuestion = () => {}

const findAllQuestions = () =>
    questionsDao.findAllQuestions()

const findQuestionById = (questionId) => {
    return questionsDao.findQuestionById(questionId)
}

const findQuestionsForQuiz = (quizId) => {
    return questionsDao.findQuestionsForQuiz(quizId)
}

const updateQuestion = () => {}

module.exports = {
    createQuestion,
    createQuestionForQuiz,
    deleteQuestion,
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz,
    updateQuestion
}