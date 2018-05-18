"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Lekéri a rendezési szándékokat a jóváhagyó oldalhoz
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository) {
    var debtModel = requireOption(objectRepository, 'debtModel');
    return function (req, res, next) {
        debtModel.getSettledDebtsForApprove(req.session.userId, function (err, result) {
            if (err) {
                return res.redirect('/home/');
            }
            console.log("ASD");
            console.log(result);
            res.tpl.debtsToApprove = result;
            return next();
        });
    };
};
