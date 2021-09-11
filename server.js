const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'ChristiaN7766@#',
        database: 'movies_db'
    },
    console.log(`Connected to the movies_db database.`)
);

app.get('/api/movies', (req, res) => {
    db.query('SELECT * FROM movies', function (err, results) {
        res.json(results);
    });
});

app.post('/api/add-movies', (req, res) => {
    db.query('INSERT INTO movies (movie_name) VALUES ("gg")', function (err, results) {
        // res.json(results);
        if (err) throw err;
        console.log("Review successfully recorded.");
    });
});

app.delete('/api/del-movies', (req, res) => {
    db.query(`DELETE FROM movies WHERE id = ?`, 11, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log("Review deleted");
    });
});

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});