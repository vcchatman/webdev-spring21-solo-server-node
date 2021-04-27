
const quizzes = require('./quizzes.json')

const createQuiz = () => {}

const deleteQuiz = () => {}

const findAllQuizzes = () => {
    return quizzes
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