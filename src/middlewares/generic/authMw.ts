import {NextFunction, Request   } from "express";
//login ellenőrzés
import {Response} from "../../typings/MyResponseExtension"
module.exports = function (objectRepository:any) {

    return function (req: Request, res: Response, next: NextFunction) {
        res.tpl.userId=0;
        console.log("auth");
        return next();
    };
}
