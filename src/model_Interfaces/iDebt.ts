import {iUser} from "./iUser";

export interface iDebt{
    _id:any;
    date:Date;
    sum:number;
    debtor:iUser;
    debtee:iUser;
    comment:string;

    state:DebtState;

}
enum DebtState{
    UnSettled=0,
    UnApproved = 1,
    Settled=2
}