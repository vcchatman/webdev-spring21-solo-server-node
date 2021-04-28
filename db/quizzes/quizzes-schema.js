const mongoose = require("mongoose")
const quizzesSchema = mongoose.Schema({
    // below plays the same role as the class in Java, establishes the structure from application's point of view
    _id: String,
    title: String,
    courseId: String
}, {collection: "quizzes"})

module.exports = quizzesSchema