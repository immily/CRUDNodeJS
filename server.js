// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors=require('cors');

// Get  API routes
const api = require('./server/api/routes/index');


const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use(cors());

// Set api route
app.use('/', api);


const port = process.env.PORT || '3000';
app.set('port', port);

// Create HTTP server.

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));