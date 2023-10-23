import express from 'express';
import Connection from './databse/db.js';
import dotenv  from 'dotenv';


const app = express();

dotenv.config();

const PORT=8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


Connection(USERNAME,PASSWORD);

app.listen(PORT, ()=> console.log(`Server Success Port ${PORT}`));