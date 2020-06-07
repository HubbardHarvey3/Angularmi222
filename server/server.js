// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


//variable to hold the json which contains the name and titles of the mp3 files
const jsonData = require('./blog.json')
const app = express();

//needed to circumnavigate the CORS error during local development
// may not need in prod
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist/mi222Redesign')));
// app.use(express.static(path.join(__dirname, './serverAssets')))

//base route 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/mi222Redesign/index.html'));
});

//route used by Angular to display all of the audio file information on the Listen page.
app.get('/json', (req, res) => {
    res.send(jsonData)
})

//This route serves the mp3 files from the serverAssets folder which houses the server.js
app.get('/blogContent', (req, res) => {
    res.sendFile(path.join(__dirname, './blog.json'));
});


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));