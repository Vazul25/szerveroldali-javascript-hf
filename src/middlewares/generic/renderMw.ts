import {Request, Response} from "express";

module.exports = function (objectRepository: any, viewName: string) {
    return function (req: Request, res: Response) {
        res.render(viewName,res.tpl);

    }
}