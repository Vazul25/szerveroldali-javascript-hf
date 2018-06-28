import { DebtSchemaModel,iDebtModel} from "../models/debtSchema";
import {RepositoryBase} from "./RepositoryBase";
import {UserRepository} from "./userRepository";
import {DocumentQuery} from "mongoose";

export class DebtRepository extends RepositoryBase<iDebtModel> {
    private _userRepository = UserRepository;
    constructor() {
        super(DebtSchemaModel);
    }

    find (cond: any, callback: (error: any, result: iDebtModel) => void) {
        this._model.find( cond).populate("debtor","-password").populate("debtee","-password").exec(callback);
    }

    findById (_id: string, callback: (error: any, result: iDebtModel) => void) {
        this._model.findById( _id  ).populate("debtor","-password").populate("debtee","-password").exec(callback);
    }
    findOne (cond: any, callback: (error: any, result: iDebtModel) => void) {
        this._model.findOne( cond ).populate("debtor","-password").populate("debtee","-password").exec(callback);
    }
    /*getAllDebtBetweenUsesrs(userId1:any,userId2:any): DocumentQuery<iDebt[]>{
        this._userRepository.findById(userId1,(err,res)=>{
            if(err) {console.log("ERROR userid1 user not found");cb(err,res);}
            console.log(res);
            this._userRepository.findById(userId2,(err,res)=>{
                if (err){("ERROR userid2 user not found");cb(err,res);}
                console.log(res);

                this._debtRepository.find({debtee._id: userId1})
            })
        });
    }*/
}

Object.seal(DebtRepository);