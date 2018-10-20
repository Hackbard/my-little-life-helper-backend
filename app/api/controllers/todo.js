/*
 * Copyright (c) 2018. Benjamin Klein
 */

const userModel = require('../models/todoList');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    create: function (req, res, next) {
        console.log(req.body)
        userModel.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }, function (err, result) {
            if (err) {
                errorData = {};
                for (var errors in err.errors) {
                    errorData[errors] = err.errors[errors].properties.message;
                }
                res.status(400).json({status: "error", message: "Something went wrong!", data: errorData});
            } else {
                res.json({status: "success", message: "User added", data: null});
            }
        });
    },
}