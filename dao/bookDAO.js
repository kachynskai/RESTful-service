
const Book = require("../models/book");
class BookDao{
    static async getAllBooks() {
        return Book.find();
    }
    static async getBookById(id) {
        return Book.findById(id);
    }

    static async getBookByISBN(isbn) {
        return Book.findOne({isbn: isbn});
    }
    static async getBooksByGenre(genre) {
        return Book.find({genre: genre});
    }
    static async addBook(newBook) {
        return Book.create(newBook);
    }
    static async updateBook(id, newData) {
        return Book.findByIdAndUpdate(id, newData, {new: true});
    }
    static async removeBook(id) {
        return Book.findByIdAndDelete(id);
    }
}

module.exports = BookDao;
