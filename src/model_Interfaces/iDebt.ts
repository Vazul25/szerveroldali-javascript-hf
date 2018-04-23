interface iDebt{
    date:Date;
    sum:number;
    debtor:iUser;
    debtee:iUser;
    comment:string;
    id:number;
    state:DebtState;

}
enum DebtState{
    UnSettled=0,
    UnApproved = 1,
    Settled=2
}