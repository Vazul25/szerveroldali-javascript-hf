var DebtState;
(function (DebtState) {
    DebtState[DebtState["UnSettled"] = 0] = "UnSettled";
    DebtState[DebtState["UnApproved"] = 1] = "UnApproved";
    DebtState[DebtState["Settled"] = 2] = "Settled";
})(DebtState || (DebtState = {}));
