/*
 * Copyright (c) 2018. Benjamin Klein
 */

const todoList = require('../models/todoList');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    create: function (req, res, next) {
        todoList.create({
            name: req.body.name,
            user_id: req.body.userId
        }, function (err, result) {
            if (err) {
                errorData = {};
                for (var errors in err.errors) {
                    errorData[errors] = err.errors[errors].properties.message;
                }
                res.status(400).json({status: "error", message: "Something went wrong!", data: errorData});
            } else {
                res.json({status: "success", message: "Todo added", data: null});
            }
        });
    },
    getAll: function (req, res, next) {
        res.status(501);
    },
    getById: function (req, res, next) {
        res.status(501);
    },
    updateById: function (req, res, next) {
        res.status(501);
    },
    deleteById: function (req, res, next) {
        res.status(501);
    },
}