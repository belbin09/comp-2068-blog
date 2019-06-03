const express = require('express');
const app = express();

//Import the routes
const pageRoutes = require('./routes/pages');
const blogRoutes = require('./routes/blogs');

//Register out page pageRoutes
app.use('/', pageRoutes);
app.use('/blogs', blogRoutes);

//Export the changes
module.exports = app;
