import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import postRoutes from './routers/posts.js';
import db from './db.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('hello world');
});

db();

app.listen(port, () => {
    console.log(`listening from port: ${port}`);
});
