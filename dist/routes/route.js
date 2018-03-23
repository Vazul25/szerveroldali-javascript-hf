"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (app) {
    var renderMw = require("../middlewares/generic/render");
    var authMw = require("../middlewares/generic/auth");
    var objrep = {};
    app.get('/Approve', authMw(objrep), renderMw(objrep, 'approveDebt'));
    app.post('/Approve', authMw(objrep));
    app.get('/Details/:id', authMw(objrep), renderMw(objrep, 'debtDetails'));
    app.post('/Details', authMw(objrep));
    app.get('/Home', authMw(objrep), renderMw(objrep, 'home'));
    app.get('/Login', authMw(objrep), renderMw(objrep, 'login'));
    app.post('/Login', authMw(objrep));
    app.get('/New', authMw(objrep), renderMw(objrep, 'new'));
    app.post('/New', authMw(objrep));
    app.get('/Register', authMw(objrep), renderMw(objrep, 'register'));
    app.post('/Register', authMw(objrep));
};
