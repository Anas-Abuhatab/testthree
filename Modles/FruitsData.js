'use strict';

const mongoose =require('mongoose')

const fruitsSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number
});

const fruitsModle =mongoose.model('fruits',fruitsSchema);

module.exports = { fruitsModle };