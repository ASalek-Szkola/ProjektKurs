import mysql from 'mysql2/promise';

export const db_conn = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "baza" 
})