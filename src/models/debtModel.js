"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DebtRepository_1 = require("../Repository/DebtRepository");
var mongoose_1 = require("mongoose");
var iDebt_1 = require("../model_Interfaces/iDebt");
var DebtModel = /** @class */ (function () {
    function DebtModel() {
        this._debtRepository = new DebtRepository_1.DebtRepository();
    }
    DebtModel.prototype.toObjectId = function (_id) {
        return mongoose_1.Types.ObjectId.createFromHexString(_id);
    };
    DebtModel.prototype.getAllDebtBetweenUsesrs = function (userId1, userId2, cb) {
        this._debtRepository.find({ $or: [
                { $and: [{ "debtor": this.toObjectId(userId1) }, { "debtee": this.toObjectId(userId2) }] },
                { $and: [{ "debtor": this.toObjectId(userId2) }, { "debtee": this.toObjectId(userId1) }] }
            ] }, cb);
    };
    DebtModel.prototype.getUserDebts = function (userId1, callback) {
        //console.log("TEST " +userId1);
        this._debtRepository.find({ $and: [{ $or: [{ "debtor": this.toObjectId(userId1) }, { "debtee": this.toObjectId(userId1) }] }, { "state": iDebt_1.DebtState.UnSettled }] }, callback);
    };
    DebtModel.prototype.getSettledDebtsForApprove = function (userId, callback) {
        this._debtRepository.find({ $and: [{ "debtor": this.toObjectId(userId) }, { "state": iDebt_1.DebtState.UnApproved }] }, callback);
    };
    DebtModel.prototype.approveDebts = function (debtIds, userId, callback) {
        var debtsToApprove = [];
        for (var objId in debtIds) {
            debtsToApprove.push(this.toObjectId(objId));
        }
        this._debtRepository.updateAll({ $and: [{ "_id": { "$in": debtsToApprove } }, { "debtor": this.toObjectId(userId) }, { "state": iDebt_1.DebtState.UnApproved }] }, { "state": iDebt_1.DebtState.Settled }, { multi: true, upsert: false }, callback);
    };
    DebtModel.prototype.create = function (item, callback) {
        this._debtRepository.create(item, callback);
    };
    DebtModel.prototype.retrieve = function (callback) {
        this._debtRepository.retrieve(callback);
    };
    DebtModel.prototype.update = function (_id, item, callback) {
        var _this = this;
        this._debtRepository.findById(_id, function (err, res) {
            if (err)
                callback(err, res);
            else
                _this._debtRepository.update(res._id, item, callback);
        });
    };
    DebtModel.prototype.delete = function (_id, callback) {
        this._debtRepository.delete(_id, callback);
    };
    DebtModel.prototype.findById = function (_id, callback) {
        this._debtRepository.findById(_id, callback);
    };
    DebtModel.prototype.splitDebts = function (userId, debts) {
        var myDebts = [];
        var debtsToMe = [];
        for (var i in debts) {
            if (debts[i].debtor._id == userId)
                debtsToMe.push(debts[i]);
            else
                myDebts.push(debts[i]);
        }
        var result = { debtsToMe: debtsToMe, myDebts: myDebts };
        return result;
    };
    return DebtModel;
}());
exports.DebtModel = DebtModel;
/*



export class debtModel{
    private debtInstanceMock1 =
        {
            comment:"Bevásárlás",date:new Date(),
            debtee:{email:'mock@gmail.com',fullName:"Test Elek",_id:0,nickName:'Test',birthDay:new Date()},
            debtor:{email:'mock2@gmail.com',fullName:"Test Elek2",_id:1,nickName:'Test2',birthDay:new Date()},
            _id:1,
            sum:250,
            state:0
        } ;
    private debtInstanceMock2 =
        {
            comment:"Bevásárlás",date:new Date(),
            debtee:{email:'mock@gmail.com',fullName:"Test Elek",_id:1,nickName:'Test',birthDay:new Date()},
            debtor:{email:'mock2@gmail.com',fullName:"Test Elek2",_id:0,nickName:'Test2',birthDay:new Date()},
            _id:2,
            sum:250,
            state:0
        } ;
    private debtInstanceMock3 =
        {
            comment:"Bevásárlás",date:new Date(),
            debtee:{email:'mock@gmail.com',fullName:"Test Elek",_id:0,nickName:'Test',birthDay:new Date()},
            debtor:{email:'mock2@gmail.com',fullName:"Test Elek2",_id:1,nickName:'Test2',birthDay:new Date()},
            _id:3,
            sum:250,
            state:1
        } ;
    private debtInstanceMock4 =
        {
            comment:"Bevásárlás",date:new Date(),
            debtee:{email:'mock@gmail.com',fullName:"Test Elek",_id:1,nickName:'Test',birthDay:new Date()},
            debtor:{email:'mock2@gmail.com',fullName:"Test Elek2",_id:0,nickName:'Test2',birthDay:new Date()},
            _id:4,
            sum:250,
            state:1
        } ;
    private debtInstanceMock5 =
        {
            comment:"Bevásárlás",date:new Date(),
            debtee:{email:'mock@gmail.com',fullName:"Test Elek",_id:0,nickName:'Test',birthDay:new Date()},
            debtor:{email:'mock2@gmail.com',fullName:"Test Elek2",_id:1,nickName:'Test2',birthDay:new Date()},
            _id:5,
            sum:250,
            state:2
        } ;
    private debtInstanceMock6 =
        {
            comment:"Bevásárlás",date:new Date(),
            debtee:{email:'mock@gmail.com',fullName:"Test Elek",_id:1,nickName:'Test',birthDay:new Date()},
            debtor:{email:'mock2@gmail.com',fullName:"Test Elek2",_id:0,nickName:'Test2',birthDay:new Date()},
            _id:6,
            sum:250,
            state:2
        } ;
    constructor(db:any){
        console.log("db is: "+db);
        //valami db config

    }
    //vissza adja a felhasználók közt fenálló tartozásokat
    public  getAllDebtBetweenUsesrs(userId1:number,userId2:number,cb:(err:iErrorObject,result:any)=>any):iDebt[]{

        return cb(null,[this.debtInstanceMock1,this.debtInstanceMock2,this.debtInstanceMock6,this.debtInstanceMock6,this.debtInstanceMock1,this.debtInstanceMock6,this.debtInstanceMock5,this.debtInstanceMock6,this.debtInstanceMock5,this.debtInstanceMock2,this.debtInstanceMock5,this.debtInstanceMock6]);
    }

    //vissza adja a felhasználók közt fenálló tartozásokat
    public  getMyDebts(userId1:number, cb:(err:iErrorObject,result:any)=>any):iDebt[]{

        return cb(null,[this.debtInstanceMock1,this.debtInstanceMock2, this.debtInstanceMock1,this.debtInstanceMock2, this.debtInstanceMock2,this.debtInstanceMock2, this.debtInstanceMock2,this.debtInstanceMock2]);
    }

    //új tartozás létrehozásához
    public addDebt(newDebt:iDebt):void {

    }
    //több új tartoás létrehozásához
    public addAllDebt(newDebts:iDebt[]):void{

    }
    //jóváhagyja a rendezéseket
    public approveSettleDebts(debtIds:number[]):void{}

    //rendezés elküldése jóváhagyásra
    public settleDebts(debtIds:number[]):void{}

    //jóváhagyásra váró adósság rendezések lekérése
    public getSettledDebtsForApprove(userId:number,cb:(err:iErrorObject,result:any)=>any) {

        return cb(null,[this.debtInstanceMock4,this.debtInstanceMock4,this.debtInstanceMock4,this.debtInstanceMock4 ]);
    }

    public  splitDebts(userId:number,debts:iDebt[]):iDebtPair {
        let myDebts:iDebt[]=[];
        let debtsToMe:iDebt[]=[];
        for(let i in debts){
            if(debts[i].debtor._id===userId)   debtsToMe.push(debts[i]);
            else myDebts.push(debts[i]);

        }
        let result:iDebtPair={debtsToMe:debtsToMe,myDebts:myDebts};

        return result;

    }

}
*/ 
