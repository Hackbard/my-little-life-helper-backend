/*
 * Copyright (c) 2018. Benjamin Klein
 */


const mongoose = require('mongoose');
const validator = require('validator');
const timestampPlugin = require('./plugins/timestampPlugin');
//Define a schema
const Schema = mongoose.Schema;
const schema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    list_items: {
        type: [Schema.Types.ObjectId],
        ref: 'todoListItem'
    }
});

schema.plugin(timestampPlugin);
module.exports = mongoose.model('TodoList', schema);