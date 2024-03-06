const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/BooksStorage')
const BookSchema = new mongoose.Schema({
    title: {
        type: String
    },
    type: {
        type: String
    },
    stock: {
        type: String
    },
    price: {
        type: Number
    },
    published: {
        type: Date
    },
    author: {
        type: String
    }
})

const BookModel = mongoose.model('BOOK', BookSchema)
module.exports = { BookModel } 