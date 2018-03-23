interface iDebt{
    date:Date;
    price:number;
    debtor:iUser;
    debtee:iUser;
    comment:string;
    id:number;
    state:DebtState;

}
enum DebtState{
    UnSetteled=0,
    UnApproved = 1,
    Approved=2,
}