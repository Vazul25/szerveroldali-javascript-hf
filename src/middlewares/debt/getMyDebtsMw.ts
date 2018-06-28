import {NextFunction  } from "express";
import {Response} from "../../typings/MyResponseExtension";
import {DebtModel} from "../../models/debtModel";
import {iUserModel} from "../../model_Interfaces/iUser";
import {UserSchemaModel} from "../../models/userSchema";
import {UserModel} from "../../models/userModel";
import {iDebt} from "../../model_Interfaces/iDebt";
import {iDebtPair} from "../../typings/iDebtPair";
//Lekéri a főoldalhoz a tartozásokat

var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository:any) {
    var debtModel :DebtModel = requireOption(objectRepository, 'debtModel');
    return function (req, res: Response, next: NextFunction) {
        console.log(req.session.userId);
       debtModel.getUserDebts(

          req.session.userId,
            function (err, result) {
                if (err ||!result) {
                    res.tpl.debts={myDebts:[],debtsToMe:[]}
                }
                //console.log(result);
                let debts=debtModel.splitDebts(req.session.userId,result);

                res.tpl.debts = debts;


                return next();
            });

    };
}
