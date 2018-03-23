"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (app) {
    var objrep = {};
    var loginMw = require("../middlewares/login/loginMw");
    var registerMw = require("../middlewares/login/registerMw");
    var checkRegisterFormMw = require("../middlewares/login/checkRegisterFormMw");
    var renderMw = require("../middlewares/generic/renderMw");
    var inverseAuthMw = require("../middlewares/generic/inverseAuthMw");
    app.get('/Register', inverseAuthMw(objrep), renderMw(objrep, 'register'));
    app.post('/Login', inverseAuthMw(objrep), loginMw(objrep));
    app.post('/Register', inverseAuthMw(objrep), checkRegisterFormMw(objrep), registerMw(objrep));
    app.post('/Login', inverseAuthMw(objrep), loginMw(objrep));
};