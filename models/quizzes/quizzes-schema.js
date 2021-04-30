const mongoose = require("mongoose")
const quizzesSchema = mongoose.Schema({
    // below plays the same role as the class in Java, establishes the structure from application's point of view
    _id: String,
    title: String,
    courseId: String,
    questions: [{
        type: String,
        ref: 'QuestionsModel'
    }] // establishes one to many relationship from quiz to questions. this quiz has these questions
}, {collection: "quizzes"})

module.exports = quizzesSchema