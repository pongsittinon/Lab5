"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promisePool = exports.connection = void 0;
const mysql2_1 = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
// Create a pool of connections
exports.connection = (0, mysql2_1.createPool)({
    // host: "127.0.0.1",
    // port: 3306,
    // user: "root",
    // password: "admin",
    // database: "product_db",
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    // `connectionLimit` is optional but a good idea to define
    connectionLimit: 10,
});
// Wrap the pool in a promise-based API if needed
exports.promisePool = exports.connection.promise();
