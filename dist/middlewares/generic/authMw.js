"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (objectRepository) {
    return function (req, res, next) {
        res.tpl.userId = 0;
        console.log("auth");
        return next();
    };
};
