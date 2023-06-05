import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "princess",
    password: "root123",
    database: "social"
});