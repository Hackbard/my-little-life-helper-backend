/*
 * Copyright (c) 2018. Benjamin Klein
 */

const express = require('express');
const router = express.Router();
const userController = require('../api/controllers/todo');


router.post('/', userController.create);
router.get('/', userController.getAll);
router.get('/:todoId', userController.getById);
router.put('/:todoId', userController.updateById);
router.delete('/:todoId', userController.deleteById);

module.exports = router;
