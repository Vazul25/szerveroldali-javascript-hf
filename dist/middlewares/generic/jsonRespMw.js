"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (objectRepository, propertyToParse, parsetpl = false) {
    return function (req, res) {
        if (!parsetpl)
            return res.json({ [propertyToParse]: res.tpl[propertyToParse] });
        else
            return res.json({ data: res.tpl });
    };
};
