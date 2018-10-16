/*
 * Copyright (c) 2018. Benjamin Klein
 */

//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/my-little-live-helper-develop';
mongoose.plugin(require('../api/models/plugins/timestampPlugin')); // @TODO remove from submodules when this is working

mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;


module.exports = mongoose;