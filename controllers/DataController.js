'use strict';


const axios = require('axios');
const { apiData } = require('../Modles/DataModle');
const { fruitsModle } = require('../Modles/FruitsData');

let getApiData = async (req, res) => {

    axios.get(`https://fruit-api-301.herokuapp.com/getFruit`).then(data => {

        let allData = data.data.fruits.map(item => {
            return new apiData(item);
        });
        res.json(allData)
    });
};

let getFruitData = async (req, res) => {
    fruitsModle.find().then(data => {
        res.json(data)
    });
};

let createFruitData = async (req, res) => {
    let bodyData = req.body;
    let newFruit = new fruitsModle(bodyData);
    await newFruit.save();
    fruitsModle.find().then(data => {
        res.json(data)
    });
};

let deleteFruitData = async (req, res) => {
    let fruitID = req.params.id;
    await fruitsModle.findByIdAndDelete(fruitID);
    await fruitsModle.find().then(data => {
        res.json(data)
    });
};

let updateFruitData = async (req, res) => {
    let fruitID = req.params.id;
    let bodyData = req.body;
   await fruitsModle.findOne({ _id: fruitID }).then(async data => {
        data.name = bodyData.name;
        data.image = bodyData.image;
        data.price = bodyData.price;
        await data.save()
    });
    await fruitsModle.find().then(data => {
        res.json(data)
    });
};


module.exports = {
    getApiData,
    getFruitData,
    createFruitData,
    deleteFruitData,
    updateFruitData
};