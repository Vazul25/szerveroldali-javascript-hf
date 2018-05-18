import {NextFunction   } from "express";
import {Response} from "../../typings/MyResponseExtension"
import {DebtModel} from "../../models/debtModel";

//Jóváhagyja a rendezési szándékokat

var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository:any) {
    var debtModel:DebtModel = requireOption(objectRepository, 'debtModel');

    return function (req, res: Response, next: NextFunction) {
        console.log("Approving");
        if(!req.body.toApprove){
            console.log("nothing to approve");
            console.log(req.body.toApprove) ;
            next();}
        debtModel.approveDebts(req.body.toApprove,req.session["userId"],function (err, result) {
                if(err){
                    res.tpl.error.push("Something happened while trying to approve settlements");

                }
                return next();
            }
        )

    };
}
