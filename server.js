const express = require('express');
const mongoose = require("mongoose");
const routes = require('./routes/bookRoutes.js');
const server = express();

server.use(express.json());

const connectionDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/books');
        console.log('Database was successfully connected!');
    } catch (error) {
        console.error('Connection to MongoDB was failed: ', error);
        process.exit(1);
    }
};

connectionDB();
server.use('/', routes);
server.listen(3000, () => console.log('Server is running on port 3000'));