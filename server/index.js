const express = require('express');
const mangoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json());


mangoose.connect('mongodb://127.0.0.1:27017/crud')

app.listen(5000, () => {    
    
console.log('server is running on port 5000')
})