import {NextFunction,Request  } from "express";
import {DebtModel} from "../../models/debtModel";

import {Response} from "../../typings/MyResponseExtension"
//Lekéri a rendezési szándékokat a jóváhagyó oldalhoz
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository:any) {
    var debtModel:DebtModel = requireOption(objectRepository, 'debtModel');
    return function (req, res: Response, next: NextFunction) {



            debtModel.getSettledDebtsForApprove(
                req.session.userId,
                function (err, result) {
                    if (err ||!result) {
                        res.tpl.debtstoAppove=[];
                        return res.redirect('/home/')
                    }


                    res.tpl.debtsToApprove = result;
                    return next();
                });
        };

}
