import {NextFunction, Request, Response} from "express";
import {UserModel} from "../../models/userModel";
import {DebtModel} from "../../models/debtModel";

//ellenőrzi hogy megfelelő a formátuma a kiirandó adósségoknak

module.exports = function (objectRepository:any) {
    var debtModel:DebtModel = requireOption(objectRepository, 'debtModel');
    var userModel:UserModel = requireOption(objectRepository, 'userModel');
    return function (req: Request, res: Response, next: NextFunction) {

        return next();
    };
}
