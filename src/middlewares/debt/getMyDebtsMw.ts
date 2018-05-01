import {NextFunction, Request  } from "express";
import {Response} from "../../typings/MyResponseExtension"
import {DebtModel} from "../../models/debtModel";
import {iUserModel} from "../../model_Interfaces/iUser";
import {UserSchemaModel} from "../../models/userSchema";
import {UserModel} from "../../models/userModel";
//Lekéri a főoldalhoz a tartozásokat

var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository:any) {
    var debtModel :DebtModel = requireOption(objectRepository, 'debtModel');
    var userModel :UserModel= requireOption(objectRepository, 'userModel');
    return function (req: Request, res: Response, next: NextFunction) {
        let item  =  new UserSchemaModel();


            item.email='mock@gmail.com';
            item.fullName="Test Elek";
            item.createdAt= new Date();
            item.nickName='Test';
            item.birthday=new Date();
            item.password="AsDasd" ;



        userModel.create(item,function (err,result) {
            console.log(result);
            console.log(err);
            console.log("Created?");
        });
     /*   debtModel.getUserDebts(
            res.tpl.userId,
            function (err, result:iDebt[]) {
                if (err) {

                    return res.redirect('/home/')
                }
                let    debts=debtModel.splitDebts(res.tpl.userId,result);

                res.tpl.debts = debts;


                return next();
            });*/

    };
}
