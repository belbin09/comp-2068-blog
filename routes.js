const express = require('express');
const app = express();

//Import the routes
const blogsRoutes = require('./routes/blogs');
const authorsRoutes = require('./routes/authors');
const sessionsRoutes = require('./routes/sessions');

//Register our Routes
app.use('/blogs', blogsRoutes);
app.use('/authors', authorsRoutes);
app.use('/', sessionsRoutes);

//Export the changes
module.exports = app;
