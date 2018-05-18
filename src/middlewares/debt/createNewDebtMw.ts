import {NextFunction, Request   } from "express";
import {Response} from "../../typings/MyResponseExtension";
import {UserModel} from "../../models/userModel";
import {DebtModel} from "../../models/debtModel";
import {DebtSchemaModel} from "../../models/debtSchema";
import {DebtState} from "../../model_Interfaces/iDebt";

//Létrehozza az új tartozásokat
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository:any) {


    return function (req, res: Response, next: NextFunction) {
        var debtModel:DebtModel = requireOption(objectRepository, 'debtModel');
        var userModel:UserModel = requireOption(objectRepository, 'userModel');
        if(req.body.sum<=0) {
            res.tpl.error.push('Sum must be grater than 0');
            return res.status(400).json({error:res.tpl.error});
        }
        if(!req.body.comment) req.body.comment=" ";
        let sum=req.body.sum;
        if(req.body.distribute) sum= sum/req.body.selectedUsers.length;

        for( let i in req.body.selectedUsers){
            let userId= req.body.selectedUsers[i];
            let newDebt=new DebtSchemaModel();
            newDebt.debtor=userId;
            newDebt.debtee=req.session.userId;
            newDebt.sum=sum;
            newDebt.state=DebtState.UnSettled;
            newDebt.comment=req.body.commment;
            debtModel.create(newDebt,function (err,result)
            {
                if(err) {

                    res.tpl.error.push('Sum must be grater than 0');
                    return res.status(500).json({error:res.tpl.error});
                }
                return next();
            })
        }


    };
}
