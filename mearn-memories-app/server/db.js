import mongoose from 'mongoose';
const db = () => {
    mongoose
        .connect('mongodb://localhost:27017/memories-app')
        .then(() => console.log('database connected....'))
        .catch((err) => {
            console.log(err);
        });
};

export default db;
