"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Ellenörzi hogy a felhasználó nincs bejelentkezve az oldalon
module.exports = function (objectRepository) {
    return function (req, res, next) {
        return next();
    };
};
