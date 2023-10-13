// Kieren Hussey 
// 200409682
// Assignment 1 - Portfolio Site


const express = require('express'); // import express
const router = express.Router(); //creating express router object (mini apps)


router.get('/', (req, res) => { // this is the root url for the home page
    res.render('home');
    
});

router.get('/about', (req, res) => { // this is the route for about page
    res.render('about');
});

router.get('/projects', (req, res) => { // this is the route for projects page
    res.render('projects');
});

router.get('/contact', (req, res) => { // this is the route for the contact page
    res.render('contact');
});


module.exports = router; // exports the router object as created above
