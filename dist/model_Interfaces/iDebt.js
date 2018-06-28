"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DebtState;
(function (DebtState) {
    DebtState[DebtState["UnSettled"] = 0] = "UnSettled";
    DebtState[DebtState["UnApproved"] = 1] = "UnApproved";
    DebtState[DebtState["Settled"] = 2] = "Settled";
})(DebtState = exports.DebtState || (exports.DebtState = {}));
