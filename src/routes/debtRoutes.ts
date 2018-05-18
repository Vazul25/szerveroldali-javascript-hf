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
var renderMw=require("../middlewares/generic/renderMw");
var authMw=require("../middlewares/generic/authMw");
var approveSettleDebtMw=require("../middlewares/debt/approveSettleDebtMw");
var checkNewDebtFormMw=require("../middlewares/debt/checkNewDebtFormMw");
var createNewDebtMw=require("../middlewares/debt/createNewDebtMw");
var getDebtDetailsMw=require("../middlewares/debt/getDebtDetailsMw");
var getMyDebtsMw=require("../middlewares/debt/getMyDebtsMw");
var getSettleIntentsMw=require("../middlewares/debt/getSettleIntentsMw");
var settleDebtMw=require("../middlewares/debt/settleDebtMw");
var getFilteredUsers=require("../middlewares/debt/getFilteredUsers");
var jsonResponse=require("../middlewares/generic/jsonRespMw");
var redirect=require("../middlewares/generic/mainredirectMw");
var appendSelectedUsers=require("../middlewares/debt/appendSelectedUsers");
var apiAuthMw=require("../middlewares/generic/apiAuthMw");
var sendStatus=require("../middlewares/generic/sendStatus");
var conditionalRedirect=require("../middlewares/generic/conditionalRedirect");
import {DebtModel} from '../models/debtModel';
import {UserModel} from '../models/userModel';

module.exports = function (app: express.Application) {

    var objrep={
        debtModel: new DebtModel(),
        userModel: new UserModel()

    };

    app.get('/Approve',authMw(objrep),getSettleIntentsMw(objrep),renderMw(objrep,'Approve_settle'));
    app.post('/Approve',authMw(objrep),approveSettleDebtMw(objrep),getSettleIntentsMw(objrep),renderMw(objrep,'Approve_settle'));
    app.get('/Details/:id',authMw(objrep),getDebtDetailsMw(objrep),renderMw(objrep,'Debt_details'));
    app.post('/Details/:id',authMw(objrep),settleDebtMw(objrep),getDebtDetailsMw(objrep),renderMw(objrep,'Debt_details'));
    app.get('/Home',authMw(objrep),getMyDebtsMw(objrep),renderMw(objrep,'Home'));
    app.get('/New',authMw(objrep),getFilteredUsers(objrep),appendSelectedUsers(objrep),renderMw(objrep,'New_debt'));


    app.post('/New',authMw(objrep), getFilteredUsers(objrep),appendSelectedUsers(objrep), renderMw(objrep,'New_debt'));


    app.post('/Debt/Create',authMw(objrep)   ,createNewDebtMw(objrep),redirect(objrep ));



    app.get('/Api/User',apiAuthMw(objrep),getFilteredUsers(objrep)  ,jsonResponse(objrep,"users") );

    app.post('/Api/Debt/Create',apiAuthMw(objrep)   ,createNewDebtMw(objrep),sendStatus(200));
    app.post('/Api/Debt',apiAuthMw(objrep),getMyDebtsMw(objrep),jsonResponse(objrep,"debts"));
    app.post('/Api/Debt/Settle/',apiAuthMw(objrep),settleDebtMw(objrep) ,sendStatus(200));
    app.post('/Api/Debt/:id',apiAuthMw(objrep),getDebtDetailsMw(objrep),jsonResponse(objrep,"tpl",true));


    app.post('/Api/SettleIntents',apiAuthMw(objrep),getSettleIntentsMw(objrep),jsonResponse(objrep,"debtsToApprove"));
    app.post('/Api/SettleIntents/Approve',apiAuthMw(objrep),approveSettleDebtMw(objrep),sendStatus(200));

}