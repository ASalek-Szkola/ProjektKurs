import mysql from 'mysql2/promise';

export const db_conn = await mysql.createConnection({
    host: "sql7.freesqldatabase.com",
    user: "sql7814456",
    password: "t14dZnNLyt",
    database: "sql7814456" 
})