const PORT = 3000;

import express from "express";
const app = express();

import cors from 'cors';
app.use(cors());

import 'dotenv/config'

app.use(express.json());

import { db_conn } from "./db.js";

app.use(express.static('public'))


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

app.post("/add-user", async (req, res) => {
    console.log(req.body);
    try {
        const body = req.body;
        const name = body.name;

        const [results] = await db_conn.execute(
            `INSERT INTO users (name) VALUES (?)`,
            [name]
        );
        res.status(200).json({ insertId: results.insertId });
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

app.all('*splat', (req, res) => {
    res.sendStatus(404);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})