import {NextFunction, Request   } from "express";
import {DebtModel} from "../../models/debtModel";

import {Response} from "../../typings/MyResponseExtension"
import {UserModel} from "../../models/userModel";


//Lekéri a tartozásokat részletező oldalhoz a 2 felhasználó közti összes tartozást
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository:any) {
    var debtModel:DebtModel = requireOption(objectRepository, 'debtModel');
    var userModel:UserModel = requireOption(objectRepository, 'userModel');
    return function (req, res: Response, next: NextFunction) {
        userModel.findOne({"_id":req.params.id},function (err,result) {
            //console.log(req.params);

            res.tpl.usersDetails=result;
            debtModel.getAllDebtBetweenUsesrs(
                req.session.userId,
                req.params.id,
                function (err, result) {
                    if (err || !result) {
                        console.log(err);
                        console.log("error happened");
                        res.tpl.error.push("db error with geting the details")
                        res.tpl.debts={myDebts:[],debtsToMe:[]};
                        return next()
                    }

                    let debts=debtModel.splitDebts( req.session.userId,result);
                    res.tpl.debts = debts;
                    return next();



                });
        } )


    };
}
