import {NextFunction, Request, Response} from "express";

//Jóváhagyja a rendezési szándékokat

module.exports = function (objectRepository:any) {

    return function (req: Request, res: Response, next: NextFunction) {
        //
        //objectRepository['db'].update
        return next();
    };
}
