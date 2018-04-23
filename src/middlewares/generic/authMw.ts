import {NextFunction, Request, Response} from "express";
//login ellenőrzés
module.exports = function (objectRepository:any) {

    return function (req: Request, res: Response, next: NextFunction) {
        res.tpl.userId=0;
        console.log("auth");
        return next();
    };
}
