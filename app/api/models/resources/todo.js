/*
 * Copyright (c) 2018. Benjamin Klein
 */


module.exports = function (model) {
    return {
        name: model.name,
        created_on: model.created_on,
        updated_on: model.updated_on
    }
};
