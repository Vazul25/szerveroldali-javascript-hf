import {iDebtModel} from "../../models/debtSchema";

module.exports = function (flagName:string,destination:string,negate:boolean=false) {

    return function (req, res, next) {
        if(negate){
            if(req.body.flagName || req.param.flagName||req.query.flagName)
                next();
            else  return res.redirect(destination);
        }
        else
            if(req.body.flagName || req.param.flagName||req.query.flagName) return res.redirect(destination);
        next();
    };

};