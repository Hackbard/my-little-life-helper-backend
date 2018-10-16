/*
 * Copyright (c) 2018. Benjamin Klein
 */

const express = require('express');
const router = express.Router();
const userController = require('../api/controllers/users');
router.post('/user/create', userController.create);
router.post('/user/login', userController.authenticate);
module.exports = router;
