"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Lekéri a tartozásokat részletező oldalhoz a 2 felhasználó közti összes tartozást
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository) {
    var debtModel = requireOption(objectRepository, 'debtModel');
    return function (req, res, next) {
        //console.log(req.params);
        debtModel.getAllDebtBetweenUsesrs(req.session.userId, req.params.id, function (err, result) {
            if (err) {
                console.log(err);
                console.log("error happened");
                res.tpl.debts = { myDebts: [], debtsToMe: [] };
                return next();
            }
            if (result) {
                var debts = debtModel.splitDebts(req.session.userId, result);
                res.tpl.debts = debts;
                return next();
            }
        });
    };
};
