"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class debtModel {
    constructor(db) {
        this.debtInstanceMock1 = {
            comment: "Bevásárlás", date: new Date(),
            debtee: { email: 'mock@gmail.com', fullName: "Test Elek", id: 0, nickName: 'Test', birthDay: new Date() },
            debtor: { email: 'mock2@gmail.com', fullName: "Test Elek2", id: 1, nickName: 'Test2', birthDay: new Date() },
            id: 1,
            sum: 250,
            state: 0
        };
        this.debtInstanceMock2 = {
            comment: "Bevásárlás", date: new Date(),
            debtee: { email: 'mock@gmail.com', fullName: "Test Elek", id: 1, nickName: 'Test', birthDay: new Date() },
            debtor: { email: 'mock2@gmail.com', fullName: "Test Elek2", id: 0, nickName: 'Test2', birthDay: new Date() },
            id: 2,
            sum: 250,
            state: 0
        };
        this.debtInstanceMock3 = {
            comment: "Bevásárlás", date: new Date(),
            debtee: { email: 'mock@gmail.com', fullName: "Test Elek", id: 0, nickName: 'Test', birthDay: new Date() },
            debtor: { email: 'mock2@gmail.com', fullName: "Test Elek2", id: 1, nickName: 'Test2', birthDay: new Date() },
            id: 3,
            sum: 250,
            state: 1
        };
        this.debtInstanceMock4 = {
            comment: "Bevásárlás", date: new Date(),
            debtee: { email: 'mock@gmail.com', fullName: "Test Elek", id: 1, nickName: 'Test', birthDay: new Date() },
            debtor: { email: 'mock2@gmail.com', fullName: "Test Elek2", id: 0, nickName: 'Test2', birthDay: new Date() },
            id: 4,
            sum: 250,
            state: 1
        };
        this.debtInstanceMock5 = {
            comment: "Bevásárlás", date: new Date(),
            debtee: { email: 'mock@gmail.com', fullName: "Test Elek", id: 0, nickName: 'Test', birthDay: new Date() },
            debtor: { email: 'mock2@gmail.com', fullName: "Test Elek2", id: 1, nickName: 'Test2', birthDay: new Date() },
            id: 5,
            sum: 250,
            state: 2
        };
        this.debtInstanceMock6 = {
            comment: "Bevásárlás", date: new Date(),
            debtee: { email: 'mock@gmail.com', fullName: "Test Elek", id: 1, nickName: 'Test', birthDay: new Date() },
            debtor: { email: 'mock2@gmail.com', fullName: "Test Elek2", id: 0, nickName: 'Test2', birthDay: new Date() },
            id: 6,
            sum: 250,
            state: 2
        };
        console.log("db is: " + db);
    }
    getAllDebtBetweenUsesrs(userId1, userId2, cb) {
        return cb(null, [this.debtInstanceMock1, this.debtInstanceMock2, this.debtInstanceMock6, this.debtInstanceMock6, this.debtInstanceMock1, this.debtInstanceMock6, this.debtInstanceMock5, this.debtInstanceMock6, this.debtInstanceMock5, this.debtInstanceMock2, this.debtInstanceMock5, this.debtInstanceMock6]);
    }
    getMyDebts(userId1, cb) {
        return cb(null, [this.debtInstanceMock1, this.debtInstanceMock2, this.debtInstanceMock1, this.debtInstanceMock2, this.debtInstanceMock2, this.debtInstanceMock2, this.debtInstanceMock2, this.debtInstanceMock2]);
    }
    addDebt(newDebt) {
    }
    addAllDebt(newDebts) {
    }
    approveSettleDebts(debtIds) { }
    settleDebts(debtIds) { }
    getSettledDebtsForApprove(userId, cb) {
        return cb(null, [this.debtInstanceMock4, this.debtInstanceMock4, this.debtInstanceMock4, this.debtInstanceMock4]);
    }
    splitDebts(userId, debts) {
        let myDebts = [];
        let debtsToMe = [];
        for (let i in debts) {
            if (debts[i].debtor.id === userId)
                debtsToMe.push(debts[i]);
            else
                myDebts.push(debts[i]);
        }
        let result = { debtsToMe: debtsToMe, myDebts: myDebts };
        return result;
    }
}
exports.debtModel = debtModel;
