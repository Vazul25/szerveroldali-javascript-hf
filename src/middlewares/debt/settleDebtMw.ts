import {NextFunction   } from "express";

import {Response} from "../../typings/MyResponseExtension"
import {DebtModel} from "../../models/debtModel";

//Továbbítja jóváhagyásra a rendezést,

var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository:any) {
    var debtModel:DebtModel = requireOption(objectRepository, 'debtModel');

    return function (req, res: Response, next: NextFunction) {

        console.log(req.body.toSettle);
        debtModel.settleDebts(req.body.toSettle,req.session["userId"],function (err, result) {
                if(err){
                    res.tpl.error.push("Something happened while trying to approve settlements");
                    return res.status(500).json({error:res.tpl.error});
                }
                return next();
            }
        )

    };
}
