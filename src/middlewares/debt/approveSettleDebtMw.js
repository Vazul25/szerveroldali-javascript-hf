"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Jóváhagyja a rendezési szándékokat
module.exports = function (objectRepository) {
    return function (req, res, next) {
        return next();
    };
};
