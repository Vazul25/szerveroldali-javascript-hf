"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository) {
    var debtModel = requireOption(objectRepository, 'debtModel');
    return function (req, res, next) {
        console.log(req.body.toSettle);
        debtModel.settleDebts(req.body.toSettle, req.session["userId"], function (err, result) {
            if (err) {
                res.tpl.error.push("Something happened while trying to approve settlements");
                return res.status(500).json({ error: res.tpl.error });
            }
            return next();
        });
    };
};
