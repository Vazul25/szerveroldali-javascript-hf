import {NextFunction, Request, Response} from "express";
import {debtModel} from "../../models/debtModel";

//Lekéri a rendezési szándékokat a jóváhagyó oldalhoz
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository:any) {
    var debtModel:debtModel = requireOption(objectRepository, 'debtModel');
    return function (req: Request, res: Response, next: NextFunction) {



            debtModel.getSettledDebtsForApprove(
                res.tpl.userId,
                function (err, result) {
                    if (err) {

                        return res.redirect('/home/')
                    }
                    console.log("ASD")
                    console.log(result);
                    res.tpl.debtsToApprove = result;
                    return next();
                });
        };

}
