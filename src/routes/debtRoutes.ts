import * as express from "express";

import {NextFunction} from "express";
import {Response} from "express";
import {Request} from "express";
import {log} from "util";
//Approve            Post+Get
//Details            Post+Get
//Home               Get
//Login              Post+Get
//New                Post+Get
//Register           Post+Get
module.exports = function (app: express.Application) {

    var renderMw=require("../middlewares/generic/renderMw");
    var authMw=require("../middlewares/generic/authMw");
    var objrep={};

    var checkRepoMw=require("../middlewares/generic/checkRepositoryMw");
    var approveSettleDebtMw=require("../middlewares/debt/approveSettleDebtMw");
    var checkNewDebtFormMw=require("../middlewares/debt/checkNewDebtFormMw");
    var createNewDebtMw=require("../middlewares/debt/createNewDebtMw");
    var getDebtDetailsMw=require("../middlewares/debt/getDebtDetailsMw");
    var getMyDebtsMw=require("../middlewares/debt/getMyDebtsMw");
    var getSettleIntentsMw=require("../middlewares/debt/getSettleIntentsMw");
    var settleDebtMw=require("../middlewares/debt/settleDebtMw");



    app.get('/Approve',authMw(objrep),getSettleIntentsMw(objrep),renderMw(objrep,'approveDebt'));
    app.post('/Approve',authMw(objrep),approveSettleDebtMw(objrep));
    app.get('/Details/:id',authMw(objrep),getDebtDetailsMw(objrep),renderMw(objrep,'debtDetails'));
    app.post('/Details',authMw(objrep),settleDebtMw(objrep));
    app.get('/Home',authMw(objrep),getMyDebtsMw(objrep),renderMw(objrep,'home'));
    app.get('/Home',authMw(objrep),getMyDebtsMw(objrep),renderMw(objrep,'home'));
    app.get('/New',authMw(objrep),renderMw(objrep,'new'));
    app.post('/New',authMw(objrep),checkNewDebtFormMw(objrep),createNewDebtMw(objrep));

}