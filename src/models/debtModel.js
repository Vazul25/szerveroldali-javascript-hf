"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var debtModel = /** @class */ (function () {
    function debtModel(db) {
        //valami db config
    }
    //visssza adja a felhasználók közt fenálló tartozásokat
    debtModel.prototype.getAllDebtBetweenUsesrs = function (userId1, userId2) {
        return [
            {
                comment: "Bevásárlás", date: new Date(),
                debtee: { email: 'mock@gmail.com', fullName: "Test Elek", id: 0, nickName: 'Test', birthDay: new Date() },
                debtor: { email: 'mock2@gmail.com', fullName: "Test Elek2", id: 1, nickName: 'Test2', birthDay: new Date() },
                id: 1,
                price: 2500,
                state: 0
            },
            {
                comment: "Bevásárlás", date: new Date(),
                debtee: { email: 'mock@gmail.com', fullName: "Test Elek", id: 0, nickName: 'Test', birthDay: new Date() },
                debtor: { email: 'mock2@gmail.com', fullName: "Test Elek2", id: 1, nickName: 'Test2', birthDay: new Date() },
                id: 1,
                price: 250,
                state: 0
            },
            {
                comment: "Bevásárlás", date: new Date(),
                debtee: { email: 'mock@gmail.com', fullName: "Test Elek", id: 0, nickName: 'Test', birthDay: new Date() },
                debtor: { email: 'mock2@gmail.com', fullName: "Test Elek2", id: 1, nickName: 'Test2', birthDay: new Date() },
                id: 1,
                price: 3250,
                state: 2
            }
        ];
    };
    //új tartozás létrehozásához
    debtModel.prototype.addDebt = function (newDebt) {
    };
    //több új tartoás létrehozásához
    debtModel.prototype.addAllDebt = function (newDebts) {
    };
    //jóváhagyja a rendezéseket
    debtModel.prototype.approveSettleDebts = function (debtIds) { };
    //rendezés elküldése jóváhagyásra
    debtModel.prototype.settleDebts = function (debtIds) { };
    //jóváhagyásra váró adósság rendezések lekérése
    debtModel.prototype.getSettledDebtsForApprove = function (userId) {
        return [
            {
                comment: "Bevásárlás", date: new Date(),
                debtee: { email: 'mock@gmail.com', fullName: "Test Elek", id: 0, nickName: 'Test', birthDay: new Date() },
                debtor: { email: 'mock2@gmail.com', fullName: "Test Elek2", id: 1, nickName: 'Test2', birthDay: new Date() },
                id: 1,
                price: 250,
                state: 1
            },
            { comment: "Bevásárlás", date: new Date(), debtee: null, debtor: null, id: 1, price: 2540, state: 1 },
            { comment: "Bevásárlás", date: new Date(), debtee: null, debtor: null, id: 1, price: 2500, state: 1 },
        ];
    };
    return debtModel;
}());
exports.debtModel = debtModel;
