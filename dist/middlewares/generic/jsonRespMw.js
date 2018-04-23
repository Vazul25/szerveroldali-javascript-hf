"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (objectRepository, propertyToParse) {
    return function (req, res) {
        res.json({ [propertyToParse]: res.tpl[propertyToParse] });
    };
};
