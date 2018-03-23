"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Approve            Post+Get
//Details            Post+Get
//Home               Get
//Login              Post+Get
//New                Post+Get
//Register           Post+Get
module.exports = function (app) {
    var renderMw = require("../middlewares/generic/renderMw");
    var authMw = require("../middlewares/generic/authMw");
    var objrep = {};
    var inverseAuthMw = require("../middlewares/generic/inverseAuthMw");
    var checkRepoMw = require("../middlewares/generic/checkRepositoryMw");
    var approveSettleDebtMw = require("../middlewares/debt/approveSettleDebtMw");
    var checkNewDebtFormMw = require("../middlewares/debt/checkNewDebtFormMw");
    var createNewDebtMw = require("../middlewares/debt/createNewDebtMw");
    var getDebtDetailsMw = require("../middlewares/debt/getDebtDetailsMw");
    var getMyDebs = require("../middlewares/debt/getMyDebtsMw");
    app.get('/Approve', authMw(objrep), renderMw(objrep, 'approveDebt'));
    app.post('/Approve', authMw(objrep), approveSettleDebtMw(objrep));
    app.get('/Details/:id', authMw(objrep), getDebtDetailsMw(objrep), renderMw(objrep, 'debtDetails'));
    app.post('/Details', authMw(objrep));
    app.get('/Home', authMw(objrep), getMyDebs(objrep), renderMw(objrep, 'home'));
    app.get('/Login', renderMw(objrep, 'login'), inverseAuthMw(objrep));
    app.post('/Login', inverseAuthMw(objrep));
    app.get('/New', authMw(objrep), renderMw(objrep, 'new'));
    app.post('/New', authMw(objrep), checkNewDebtFormMw(objrep), createNewDebtMw(objrep));
    app.get('/Register', inverseAuthMw(objrep), renderMw(objrep, 'register'));
    app.post('/Register', inverseAuthMw(objrep));
};
