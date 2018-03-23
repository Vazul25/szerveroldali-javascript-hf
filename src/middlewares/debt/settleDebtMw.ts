import {NextFunction, Request, Response} from "express";

//Továbbítja jóváhagyásra a rendezést,

module.exports = function (objectRepository:any) {

    return function (req: Request, res: Response, next: NextFunction) {
        //
        //objectRepository['db'].update
        return next();
    };
}
