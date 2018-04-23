import {NextFunction, Request, Response} from "express";
import {debtModel} from "../../models/debtModel";
//Lekéri a főoldalhoz a tartozásokat

var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository:any) {
    var debtModel :debtModel = requireOption(objectRepository, 'debtModel');
    return function (req: Request, res: Response, next: NextFunction) {

        debtModel.getMyDebts(
            res.tpl.userId,
            function (err, result:iDebt[]) {
                if (err) {

                    return res.redirect('/home/')
                }
                let    debts=debtModel.splitDebts(res.tpl.userId,result);

                res.tpl.debts = debts;


                return next();
            });

    };
}
