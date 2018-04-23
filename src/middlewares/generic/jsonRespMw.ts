import {Request, Response} from "express";

module.exports = function (objectRepository: any, propertyToParse: string) {
    return function (req: Request, res: Response) {

        res.json({[propertyToParse]:res.tpl[propertyToParse]});

    }
}