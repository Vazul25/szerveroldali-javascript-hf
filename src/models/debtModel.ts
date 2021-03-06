


import { iDebtModel } from "./debtSchema";
import {iDebt} from "../model_Interfaces/iDebt"
import {DebtRepository} from "../Repository/DebtRepository";
import {UserRepository} from "../Repository/userRepository";
import {iUserModel} from "../model_Interfaces/iUser";
import {iDebtPair} from "../typings/iDebtPair";
import {Types} from "mongoose";
import  {DebtState} from "../model_Interfaces/iDebt"






export class DebtModel {

    private _debtRepository: DebtRepository ;
    private _userRepository: UserRepository  ;
    constructor( ) {
        this._debtRepository = new DebtRepository();
    }
    protected toObjectId (_id: string) : Types.ObjectId {

        return Types.ObjectId.createFromHexString(_id)
    }


    public getAllDebtBetweenUsesrs(userId1:any,userId2:any,cb:(err:iErrorObject,result:any)=>any):void/*iDebt[]*/{


        this._debtRepository.find( { $or : [
                { $and : [ { "debtor" : this.toObjectId(userId1) }, { "debtee" : this.toObjectId(userId2)} ] },
                { $and : [ { "debtor" :this.toObjectId(userId2) }, { "debtee" :this.toObjectId(userId1) } ] }
            ] },cb );

    }
    public getUserDebts(userId1:any, callback:(err:iErrorObject,result:any)=>any):void{
        //console.log("TEST " +userId1);
        this._debtRepository.find( { $and:[ {$or : [ { "debtor": this.toObjectId(userId1) },  { "debtee": this.toObjectId(userId1) } ] },{"state":DebtState.UnSettled}] },callback );

    }
    public getSettledDebtsForApprove(userId:string,callback:(err:iErrorObject,result:any)=>any):void/*iDebt[]*/{

        this._debtRepository.find( { $and:[ { "debtee": this.toObjectId(userId)},{"state":DebtState.UnApproved}] }, callback );

    }
    public approveDebts(debtIds:string[],userId:string,callback: (error: any, result: any) => void):void{
        let debtsToApprove = this.castToObjectIdArray(debtIds);
        this._debtRepository.updateAll( { $and:[ {"_id" : { "$in" : debtsToApprove } } ,{ "debtee": this.toObjectId(userId)},{"state":DebtState.UnApproved} ] },
            {"state":DebtState.Settled},
            {multi:true , upsert:false},
            callback);
    }

    public settleDebts(debtIds:string[],userId:string,callback: (error: any, result: any) => void):void{
        let debtsToSettle=this.castToObjectIdArray(debtIds);
        this._debtRepository.updateAll( { $and:[ {"_id" : { "$in" : debtsToSettle } } ,{ "debtor": this.toObjectId(userId)},{"state":DebtState.UnSettled} ] },
            {"state":DebtState.UnApproved},
            {multi:true , upsert:false},
            callback);
    }
    private castToObjectIdArray(ids:string[]):Types.ObjectId[]{
        let objIds:Types.ObjectId[]=[];
        for(let  objId in ids){

            objIds.push(this.toObjectId(ids[objId]));

        }
        return objIds;
    }

    public insertAllDebts (debts: iDebtModel[], callback: (error: any, result: any) => void) {



        this._debtRepository.insertMany(debts, callback);
    }
    public create (item: iDebtModel, callback: (error: any, result: any) => void) {



        this._debtRepository.create(item, callback);
    }

    public retrieve (callback: (error: any, result: any) => void) {
        this._debtRepository.retrieve(callback);
    }

    public update (_id: string, item: iDebtModel, callback: (error: any, result: any) => void) {

        this._debtRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._debtRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._debtRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: iDebtModel) => void) {
        this._debtRepository.findById(_id, callback);
    }
    public  splitDebts(userId:any,debts:iDebt[]):iDebtPair {
        let myDebts:iDebt[]=[];
        let debtsToMe:iDebt[]=[];
        for(let i in debts){

            if(debts[i].debtee._id==userId)   debtsToMe.push(debts[i]);
            else myDebts.push(debts[i]);

        }
        let result:iDebtPair={debtsToMe:debtsToMe,myDebts:myDebts};

        return result;

    }


}

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