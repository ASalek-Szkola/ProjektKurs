import mysql from 'mysql2/promise';

export const db_conn = await mysql.createConnection({
    host: "projektkurs.mysql.database.azure.com",
    user: "projekt",
    password: "Warszawa2026!",
    database: "baza",
    port: "3306"
})