/*
 * Copyright (c) 2018. Benjamin Klein
 */


const mongoose = require('mongoose');
const validator = require('validator');
const timestampPlugin = require('./plugins/timestampPlugin');
//Define a schema
const Schema = mongoose.Schema;
const schema = new Schema({
    comment: {
        type: String,
        trim: true,
        required: true,
    }
})

schema.plugin(timestampPlugin);
module.exports = mongoose.model('comments', schema);