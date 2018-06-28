import {NextFunction, Request} from "express";
import {UserModel} from "../../models/userModel";

import {Response} from "../../typings/MyResponseExtension"
import {DebtModel} from "../../models/debtModel";
import {type} from "os";
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository:any) {

    var userModel:UserModel= requireOption(objectRepository, 'userModel');
    return function (req: Request, res: Response, next: NextFunction) {
        console.log(req.body.selectedUsers);
        res.tpl.selectedUsers=[];

        if(req.body&&req.body.selectedUsers)
            console.log(req.body.selectedUsers);
            userModel.getAllUser(req.body.selectedUsers,function (err,result:any) {

                if(err|| !result) {
                    console.log(err);
                    return next();
                }
                else {

                    res.tpl.selectedUsers = result;

                    if(res.tpl.users){

                        res.tpl.users=  res.tpl.users.filter(
                            function (user) {
                                for (let i in result) {

                                    if (user._id.toString()==result[i]._id.toString()) return false;
                                }
                                return true;
                            });

                    }
                }

                 return next();

            })


    };
}
