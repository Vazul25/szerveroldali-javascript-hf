import {NextFunction, Request, Response} from "express";

//Lekéri a rendezési szándékokat a jóváhagyó oldalhoz

module.exports = function (objectRepository:any) {

    return function (req: Request, res: Response, next: NextFunction) {
        //
        //objectRepository['db'].update
        return next();
    };
}
