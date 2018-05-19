"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debtSchema_1 = require("../../models/debtSchema");
const iDebt_1 = require("../../model_Interfaces/iDebt");
var requireOption = require('../generic/checkRepositoryMw').requireOption;
module.exports = function (objectRepository) {
    return function (req, res, next) {
        var debtModel = requireOption(objectRepository, 'debtModel');
        if (!req.session || !req.body || !req.session.userId || !req.body.sum || !req.body.selectedUsers) {
            res.tpl.error.push('The request body must contain the selected users ids in an array,' +
                ' the sum of the debt and the userId should be accessable on the req.session.userId ');
            return res.status(400).json({ error: res.tpl.error });
        }
        if (req.body.sum <= 0) {
            res.tpl.error.push('Sum must be grater than 0');
            return res.status(400).json({ error: res.tpl.error });
        }
        if (!req.body.comment)
            req.body.comment = " ";
        let sum = req.body.sum;
        if (req.body.distribute)
            sum = sum / req.body.selectedUsers.length;
        let newDebts = [];
        for (let i in req.body.selectedUsers) {
            let userId = req.body.selectedUsers[i];
            let newDebt = new debtSchema_1.DebtSchemaModel();
            newDebt.debtor = userId;
            newDebt.debtee = req.session.userId;
            newDebt.sum = sum;
            newDebt.state = iDebt_1.DebtState.UnSettled;
            newDebt.comment = req.body.comment;
            newDebts.push(newDebt);
        }
        debtModel.insertAllDebts(newDebts, function (err, result) {
            if (err) {
                res.tpl.error.push('dberror');
                return res.status(500).json({ error: res.tpl.error });
            }
            return next();
        });
    };
};
