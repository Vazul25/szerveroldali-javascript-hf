import {NextFunction, Request, Response} from "express";
//Ellenörzi hogy a felhasználó nincs bejelentkezve az oldalon
module.exports = function (objectRepository:any) {

    return function (req: Request, res: Response, next: NextFunction) {
        return next();
    };
}
