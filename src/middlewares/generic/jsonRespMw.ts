import {Request   } from "express";

import {Response} from "../../typings/MyResponseExtension"
module.exports = function (objectRepository: any, propertyToParse: string, parsetpl:boolean=false) {
    return function (req: Request, res: Response) {

        if(!parsetpl)
            return res.json({[propertyToParse]:res.tpl[propertyToParse]});
        else return res.json({data:res.tpl});
    }
}