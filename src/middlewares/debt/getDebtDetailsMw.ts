import {NextFunction, Request   } from "express";
import {DebtModel} from "../../models/debtModel";

import {Response} from "../../typings/MyResponseExtension"

//Lekéri a tartozásokat részletező oldalhoz a 2 felhasználó közti összes tartozást
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository:any) {
    var debtModel:DebtModel = requireOption(objectRepository, 'debtModel');
    return function (req: Request, res: Response, next: NextFunction) {

        debtModel.getAllDebtBetweenUsesrs(
            0,
            req.params.userId2,
            function (err, result) {
            if (err) {

                return res.redirect('/home/')
            }
                let debts=debtModel.splitDebts(res.tpl.userId,result);
                res.tpl.debts = debts;

            return next();
        });

    };
}
