const service = require('../services/bookService.js');

class BookController {
    static async getAllBooks(req, res) {
        try{
            const books = await service.getAllBooks();
            res.json(books);
        }catch(err){
            res.status(500).json({message:err.message});
        }
    }
    static async getBookById(req,res) {
        try{
            const book= await service.getBook(req.params.id);
            res.status(200).json(book);
        }catch(err){
            res.status(404).json({message:err.message});
        }
    }

    static async getBooksByGenre(req,res) {
        try{
            const books = await service.getBooksByGenre(req.params.genre);
            res.status(200).json(books);
        }catch(err){
            res.status(500).json({message:err.message});
        }
    }
    static async createBook(req,res){
        try{
            const {isbn, title, author, year, genre} = req.body;
            if(!isbn || !title || !author || !year || !genre){
                return res.status(400).json({message:"You entered an invalid data for new book"});
            }
            const book = await service.createBook(req.body);
            res.status(201).json(book);
        }catch(err){
            res.status(500).json({message:err.message});
        }
    }
    static async updateBook(req,res){
        try{
            const book = await service.updateBook(req.params.id, req.body);
            res.status(200).json({message:"Book updated successfully", book});
        }catch(err){
            res.status(500).json({message:err.message});
        }
    }
    static async deleteBook(req,res){
        try{
            const delBook = await service.deleteBook(req.params.id);
            res.status(204).json({message:"Book deleted"});
        }catch(err){
            res.status(500).json({message:err.message});
        }
    }
}
module.exports = BookController;