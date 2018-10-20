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
    description: {
        type: String,
        trim: true,
        required: false,
    },
    status: {
        type: Number,
        required: true,
        default: 0
    },
    done_on: {
        type: Date
    },
    done_till: {
        typ: Date
    },
    locations: {
        type: [Schema.Types.ObjectId],
        ref: 'locations'
    },
    approximate_duration: {
        type: Number,
        default: 0
    },
    linked_with: {
        type: [Schema.Types.ObjectId],
        ref: 'todoListItem'
    },
    linked_with: {
        type: [Schema.Types.ObjectId],
        ref: 'comments'
    }
    // @TODO built in files
});

schema.plugin(timestampPlugin);
module.exports = mongoose.model('todoListItem', schema);