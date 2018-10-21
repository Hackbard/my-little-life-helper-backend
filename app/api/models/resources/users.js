/*
 * Copyright (c) 2018. Benjamin Klein
 */


module.exports = function (userModel) {
    return {
        id: userModel._id,
        name: userModel.name,
        email: userModel.email,
        created_on: userModel.created_on,
        updated_on: userModel.updated_on
    }
};
