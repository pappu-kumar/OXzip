require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    //Database connection

    mongoose.connect(process.env.MONGO_CONNECTION_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then( () => console.log("Database connected successfull...!"))
    .catch((err) => console.log("connection faild ",err));


    // const connection = mongoose.connection;

    // connection.once('open', () => {
    //      console.log('Database connected sucessfully....!');
         
    //     }).catch(err => {
    //          console.log('connetion faild..!'); 
    // });
}


module.exports = connectDB;