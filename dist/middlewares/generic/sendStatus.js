"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (code) {
    return function (req, res) {
        console.log("sending status");
        if (res.tpl.error.length > 0)
            return res.status(401).json({ error: res.tpl.error });
        return res.sendStatus(200);
    };
};
