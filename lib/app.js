const express = require('express');
const cookieParser = require('cookie-parser');


const app = express();
app.use(cookieParser());


// Built in middleware
app.use(express.json());

// App routes
app.use('/api/v1/books', require('./controllers/books'));
app.use('/api/v1/authors', require('./controllers/authors'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
