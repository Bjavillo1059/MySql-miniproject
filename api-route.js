const express = require('express');
const mysql = require('mysql2');
const PORT = 3001;

const app = express();
const db = 

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

db.query('SELECT * FROM movies', function (err, results) {
    console.log(results);
  });