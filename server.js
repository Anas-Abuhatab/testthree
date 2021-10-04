'use strict';

const express = require('express');
const cors = require('cors');
const { getApiData,
        getFruitData,
        createFruitData,
        deleteFruitData,
        updateFruitData } = require('./controllers/DataController');
const app = express();
const mongoose=require('mongoose')
require('dotenv').config();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
const MONGO_SERVER =process.env.MONGO_SERVER;

mongoose.connect(`${MONGO_SERVER}`, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log('DataBase Connected');
});

app.get('/',(req,res)=>{
    res.send('Iam Working');
});

app.get('/all',getApiData);
app.get('/getData',getFruitData);
app.post('/createData',createFruitData);
app.delete('/deleteData/:id',deleteFruitData);
app.put('/updateData/:id',updateFruitData);


app.listen(PORT,()=>{
    console.log(`Listing to Port ${PORT}`);
});