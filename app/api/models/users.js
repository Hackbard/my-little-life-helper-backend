/*
 * Copyright (c) 2018. Benjamin Klein
 */

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const timestampPlugin = require('./plugins/timestampPlugin');
const saltRounds = 10;
//Define a schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        validate: [{validator: value => validator.isEmail(value), msg: 'Invalid email!'}]
    },
    password: {
        type: String,
        trim: true,
        required: true,
        validate: [{validator: value => checkPasswort(value), msg: 'Password is to weak!'}]
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
});

function checkPasswort(password) {
    if (password.length < 5) {
        return false;
    }
}

// hash user password before saving into database
UserSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});
UserSchema.plugin(timestampPlugin);
module.exports = mongoose.model('User', UserSchema);
