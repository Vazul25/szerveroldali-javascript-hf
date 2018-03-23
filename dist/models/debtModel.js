"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class debtModel {
    constructor(db) {
    }
    getAllDebtBetweenUsesrs(userId1, userId2) {
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
    }
    addDebt(newDebt) {
    }
    addAllDebt(newDebts) {
    }
    approveSettleDebts(debtIds) { }
    settleDebts(debtIds) { }
    getSettledDebtsForApprove(userId) {
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
    }
}
exports.debtModel = debtModel;
