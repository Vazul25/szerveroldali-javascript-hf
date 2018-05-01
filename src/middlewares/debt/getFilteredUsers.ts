import {NextFunction, Request} from "express";
import {UserModel} from "../../models/userModel";

import {Response} from "../../typings/MyResponseExtension"
//Lekéri a tartozásokat részletező oldalhoz a 2 felhasználó közti összes tartozást
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository:any) {
    var userModel: UserModel = requireOption(objectRepository, 'userModel');
    return function (req: Request, res: Response, next: NextFunction) {

        userModel.filter(
            req.query.filter,

            function (err, result) {
                if (err) {

                    return res.redirect('/home/')
                }

                res.tpl.users = result;

                return next();
            });

    };
}
