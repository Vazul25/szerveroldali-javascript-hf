import {Request   } from "express";

import {Response} from "../../typings/MyResponseExtension"
module.exports = function (code:number) {
    return function (req: Request, res: Response) {
        console.log("sending status");
        if(res.tpl.error!.length>0)  return res.status(401).json({error:res.tpl.error})  ;
        return res.sendStatus(200);
    }

}