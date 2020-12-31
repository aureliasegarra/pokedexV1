//Loading environment variables
require ('dotenv').config();

// Modules required
const express = require('express');
const router = require('./app/router');

//Server creation
const app = express();

//we use the PORT environment variable to assign a port to our express app
const PORT = process.env.PORT || 4000;

//Configuration to use EJS as a template engine
app.set('view engine', 'ejs');
app.set('views', './app/views');

//we add the static resources of the project
app.use(express.static('./public/css'));
//To manage data in POST, we add the urlencoded middleware to retrieve the information in request.body
app.use(express.urlencoded({extended:true}));
//Add router
app.use(router);

//Server launched
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});