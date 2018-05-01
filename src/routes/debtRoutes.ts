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
import {DebtModel} from '../models/debtModel';
import {UserModel} from '../models/userModel';

module.exports = function (app: express.Application) {

    var objrep={
        debtModel: new DebtModel(),
        userModel: new UserModel()

    };





    app.get('/Approve',authMw(objrep),getSettleIntentsMw(objrep),renderMw(objrep,'Approve_settle'));
    app.get('/Api/DebtsToApprove',authMw(objrep),getSettleIntentsMw(objrep),jsonResponse(objrep,"debtsToApprove"));
    app.post('/Approve',authMw(objrep),approveSettleDebtMw(objrep));
    app.get('/Details/:id',authMw(objrep),getDebtDetailsMw(objrep),renderMw(objrep,'Debt_details'));
    app.get('/Api/Details/:id',authMw(objrep),getDebtDetailsMw(objrep),jsonResponse(objrep,"debts"));
    app.post('/Details/:id',authMw(objrep),settleDebtMw(objrep));
    app.get('/Home',authMw(objrep),getMyDebtsMw(objrep),renderMw(objrep,'Home'));
    app.get('/Api/MyDebts',authMw(objrep),getMyDebtsMw(objrep),jsonResponse(objrep,"debts"));
    app.get('/New',authMw(objrep),getFilteredUsers(objrep),renderMw(objrep,'New_debt'));
    app.post('/New',authMw(objrep),checkNewDebtFormMw(objrep),createNewDebtMw(objrep));

}