const PORT = 3000;

import express from "express";
const app = express();

import cors from 'cors';
app.use(cors());

import 'dotenv/config'

app.use(express.json());

import { db_conn } from "./db.js";

app.use(express.static('public'))
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


app.get("/get-users", async (req, res) => {
    try {;
        const [results] = await db_conn.execute(
            `SELECT * FROM users`
        );
        res.status(200).json(results);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

app.get("/get-courses", async (req, res) => {
    try {;
        const [results] = await db_conn.execute(
            `SELECT *, (SELECT SUM(lessons.duration) FROM courses LEFT JOIN chapters ON courses.id = chapters.course_id LEFT JOIN lessons ON chapters.id = lessons.id WHERE courses.id = c.id) AS 'duration' FROM courses c`
        );
        res.status(200).json(results);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

app.get("/get-courses-with-authors", async (req, res) => {
    try {;
        const [results] = await db_conn.execute(
            `SELECT c.id, c.name, c.description, c.image, u.name AS 'creator_name', u.surname AS 'creator_surname', u.email AS 'creator_email', c.price, c.difficulty, (SELECT SUM(lessons.duration) FROM courses LEFT JOIN chapters ON courses.id = chapters.course_id LEFT JOIN lessons ON chapters.id = lessons.id WHERE courses.id = c.id) AS 'duration' FROM courses c JOIN users u ON c.creator_id = u.id`
        );
        res.status(200).json(results);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

app.post("/register", async (req, res) => {
    // console.log(req.body);
    try {
        const body = req.body;
        const name = body.name;
        const password = body.password;
        const hashedPassword = await bcrypt.hash(password, 10); 

        if(!name || name.length < 3 || !password || password.length < 3){
            return res.status(400).json({ error: '' });
        }

        const [results] = await db_conn.execute(
            `INSERT INTO users (name, password) VALUES (?, ?)`,
            [name, hashedPassword]
        );

        const token = jwt.sign({ id: results.insertId }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        res.status(200).json({ token });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

app.delete("/delete-user", async (req, res) => {
    try {
        const id = req.body.id
        if (id == null) return res.sendStatus(422)
        const [results] = await db_conn.execute(
            `DELETE FROM users WHERE id = ?`,
            [id]
        );
        res.status(200).json({ affectedRows: results.affectedRows });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

app.put("/update-user", async (req, res) => {
    try {
        const id = req.body.id;
        if (id == null) return res.sendStatus(422)
        const name = req.body.name;
        const [results] = await db_conn.execute(
            `UPDATE users SET name = ? WHERE id = ?`,
            [name, id]
        );
        res.status(200).json({ affectedRows: results.affectedRows });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

app.post("/login", async (req, res) => {
    const { name, password } = req.body;
    try {
        const [results] = await db_conn.execute(
            `SELECT * FROM users WHERE name = ?`, [name]
        );
        
        if (results.length === 0) {
            return res.status(401).send('Użytkownik nie znaleziony.');
        }

        const user = results[0];

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).send('Niepoprawne hasło.');
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        res.status(200).json({ token });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.get("/protected-route", (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
    console.log(token)
    if (!token) return res.sendStatus(403);

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(401);
        res.status(200).json({ message: 'Dostęp do chronionej trasy!', userId: decoded.id });
    });
});

app.all('*splat', (req, res) => {
    res.sendStatus(404);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})