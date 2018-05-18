import {NextFunction, Request} from "express";
import {UserModel} from "../../models/userModel";

import {Response} from "../../typings/MyResponseExtension"
//Lekéri a tartozásokat részletező oldalhoz a 2 felhasználó közti összes tartozást
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository:any) {
    var userModel: UserModel = requireOption(objectRepository, 'userModel');
    return function (req: Request, res: Response, next: NextFunction) {
        let filter:Object={};
        if(  req.body.filter)
            filter = {"fullName": {$regex: req.body.filter, $options:"i"}}


        userModel.find(filter ,
            function (err, result) {
                if (err||!result) {
                    res.tpl.users=[];
                     console.log(err);
                }


                else res.tpl.users = result;

                return next();
            });

    };
}
