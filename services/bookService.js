const dao = require('../dao/bookDAO.js');

class BookService {
    static async getAllBooks() {
        const books = dao.getAllBooks();
        if (books.length === 0) {
            throw new Error("No books found.");
        }
        return books;
    }
   static  async getBook(id) {
        const book = await dao.getBookById(id);
        if (!book){
            throw new Error(`Book with id = ${id} not found`);
        }
        return book;
    }
    static async getBooksByGenre(genre) {
        const books = await dao.getBooksByGenre(genre.toLowerCase());
        if (!books){
            throw new Error(`No one book with genre = ${genre} not found`);
        }
        return books;
    }
    static async createBook(data) {
        const book = await dao.getBookByISBN(data.isbn);
        if (book){
            throw new Error(`Book with isbn: ${data.isbn} already exists`);
        }
        return await dao.addBook(data);
    }
    static async updateBook(id, newData) {
        const book = await dao.getBookById(id);

        if (!book){
            throw new Error(`Book with id = ${id} not found`);
        }

        if(newData.isbn){
            const book = await dao.getBookByISBN(newData.isbn);
            if (book && book._id.toString() !== id) {
                throw new Error("Book with ISBN already exists");
            }
        }
        return await dao.updateBook(id, newData);
    }
    static async deleteBook(id) {
        const book = await dao.getBookById(id);
        if (!book){
            throw new Error(`Book with id = ${id} not found`);
        }
        return await dao.removeBook(id);
    }

}
module.exports = BookService;