// Kieren Hussey 
// 200409682
// Assignment 1 - Portfolio Site


const express = require('express'); // Imports express backend framework
const exphbs = require('express-handlebars'); // Imports the handlebars view engine
const path = require('path'); // This allows me to work with files and directories
const indexRouter = require('./Routers/index'); // This imports the index.js that i'm using as the main router/controller

const app = express(); // This initializes a new instance of an Express application

app.set('views', path.join(__dirname, "/opt/render/project/src/kierens-portfolio/views"));

app.engine('hbs', exphbs({
    extname: '.hbs', // specifies the handlebars extension as .hbs
    defaultLayout: 'layout', // this sets the name of the default layout of all pages
    layoutsDir: path.join(__dirname, "/opt/render/project/src/kierens-portfolio/viewslayouts")

 // this specifies the path of the layout.hbs directory 
}));
app.set('view engine', 'hbs'); // sets view engine to handlebars


app.use(express.static(__dirname)); // where to find static files i.e styles.css, server.js


app.use('/', indexRouter); // this is using the indexRouter that we created to serve the base url index.js

const PORT = process.env.PORT || 3000; // Creating port 3000, but checks for a variable environment first

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); // basic localhost with port setup
