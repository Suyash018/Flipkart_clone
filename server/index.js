import express from 'express';
import Connection from './databse/db.js';
import dotenv  from 'dotenv';
import DefaultData from './default.js';
import router from './routes/route.js';
import cors from 'cors';
import bodyparser from 'body-parser';



const app = express();

dotenv.config();

app.use(bodyparser.json({extended: true}));
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

app.use('/',router);

const PORT=8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


Connection(USERNAME,PASSWORD);

app.listen(PORT, ()=> console.log(`Server Success Port ${PORT}`));

DefaultData();