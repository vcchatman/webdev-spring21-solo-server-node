const quizzesDao = require('../../daos/quizzes-dao')

const createQuiz = () => {
}

const deleteQuiz = () => {
}

const findAllQuizzes = () => {
    return quizzesDao.findAllQuizzes()
}

const findQuizById = (quizId) => {
    return quizzesDao.findQuizById(quizId)
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