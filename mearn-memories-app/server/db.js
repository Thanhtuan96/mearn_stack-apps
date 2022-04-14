import mongoose from 'mongoose';
const CONNECT_URL =
    'mongodb+srv://tuancon:Tuancon96@cluster0.irqq5.mongodb.net/test';
const db = () => {
    mongoose
        .connect(CONNECT_URL)
        .then((data) => {
            console.log('database connected....');
        })
        .catch((err) => {
            console.log(err);
        });
};

export default db;
