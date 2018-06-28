"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository) {
    var debtModel = requireOption(objectRepository, 'debtModel');
    return function (req, res, next) {
        console.log("Approving");
        if (!req.body.toApprove) {
            console.log("nothing to approve");
            console.log(req.body.toApprove);
            next();
        }
        debtModel.approveDebts(req.body.toApprove, req.session["userId"], function (err, result) {
            if (err) {
                res.tpl.error.push("Something happened while trying to approve settlements");
            }
            return next();
        });
    };
};
