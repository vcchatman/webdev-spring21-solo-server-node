const mongoose = require('mongoose')
const questionSchema = require('../../db/questions/questions-schema')
const quizAttempts = mongoose.Schema({
    _id: String,
    score: Number,
    quiz: {
        type: String,
        ref: 'QuizzesModel'
    },
    answers: [questionSchema]
}, {collection: 'quizAttempts'})

module.exports = quizAttempts