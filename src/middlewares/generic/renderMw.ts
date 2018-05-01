import {Request   } from "express";

import {Response} from "../../typings/MyResponseExtension"
module.exports = function (objectRepository: any, viewName: string) {
    return function (req: Request, res: Response) {
        res.render(viewName,res.tpl);

    }
}