"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (objectRepository, viewName) {
    return function (req, res) {
        res.end('Template:' + viewName);
    };
};
