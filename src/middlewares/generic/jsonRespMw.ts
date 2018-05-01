import {Request   } from "express";

import {Response} from "../../typings/MyResponseExtension"
module.exports = function (objectRepository: any, propertyToParse: string) {
    return function (req: Request, res: Response) {

        res.json({[propertyToParse]:res.tpl[propertyToParse]});

    }
}