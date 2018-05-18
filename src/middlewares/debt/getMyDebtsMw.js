"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Lekéri a főoldalhoz a tartozásokat
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository) {
    var debtModel = requireOption(objectRepository, 'debtModel');
    return function (req, res, next) {
        debtModel.getUserDebts(req.session.userId, function (err, result) {
            if (err) {
                return res.redirect('/home/');
            }
            //console.log(result);
            var debts = debtModel.splitDebts(req.session.userId, result);
            res.tpl.debts = debts;
            return next();
        });
    };
};
