const express = require('express');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3000;
// heroku website:    https://oxzip.herokuapp.com/ 

// using css file
app.use(express.static('public'));
app.use(express.json());

const connectDB = require('./config/db');

connectDB();

// Template engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//Routes
app.use('/api/files', require('./rootes/files')); 
app.use('/files', require('./rootes/show'));
app.use('/files/download', require('./rootes/download'));

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})

