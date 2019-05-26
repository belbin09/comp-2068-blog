const express = require('express');
const app = express();

//Import our page routes
const pageRoutes = require('./routes/pages');

//Register out page pageRoutes
app.use('/', pageRoutes);

//Export the changes
module.exports = app;
