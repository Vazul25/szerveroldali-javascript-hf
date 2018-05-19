import {debuglog} from "util";

var expect=require('chai').expect;
var createNewDebtMw=require('../../../middlewares/debt/createNewDebtMw');

describe('debtMw',function () {


    describe('sum <0 and request is otherwise valid ',function () {
        let debtModelMock = {
            create: function (some, cb) {
                cb(undefined, undefined)
            }
        };
        let objRepMock={debtModel:debtModelMock};
        let reqMock={session:{userId:"userId"},body:{ sum:-100, comment:"Komment",selectedUsers:["123321","321321321","321321321","321321321"]}};

        it('should respond with status 400', function (done) {
            let resMock = {
                tpl:{error:[]},
                status: function (code) {
                    expect(code).to.eql(400);
                    done();
                }
            };
            createNewDebtMw(objRepMock)(reqMock,resMock,{});

        });


    }) ;


    describe('sum ==0 and request is otherwise valid ',function () {


        let debtModelMock = {
            create: function (some, cb) {
                cb(undefined, undefined)
            }
        };
        let objRepMock={debtModel:debtModelMock};
        let reqMock={session:{userId:"userId"},body:{ sum:0, comment:"Komment",selectedUsers:["123321","321321321","321321321","321321321"]}};

        it('should respond with status 400', function (done) {
            let resMock = {
                tpl:{error:[]},
                status: function (code) {
                    expect(code).to.eql(400);
                    done();
                }
            };
            createNewDebtMw(objRepMock)(reqMock,resMock,{});

        });
    }) ;


    describe('distribute=true and request  valid ',function () {


        let debtModelMock = {
            insertAllDebts: function (some, cb) {
                cb(null, {})
            }
        };
        let objRepMock={debtModel:debtModelMock};
        let reqMock={session:{userId:"userId"},body:{distribute:true, sum:100, comment:"Komment",selectedUsers:["123321","321321321","321321321","321321321"]}};

        it('should call next', function (done) {
            let resMock = {


            };
            createNewDebtMw(objRepMock)(reqMock,resMock,function () {
                done();

            });

        });


    }) ;
    describe('  request is   valid ',function () {


        let debtModelMock = {
            insertAllDebts: function (some, cb) {
                cb(null, {})
            }
        };
        let objRepMock={debtModel:debtModelMock};
        let reqMock={session:{userId:"userId"},body:{ sum:100, comment:"Komment",selectedUsers:["123321","321321321","321321321","321321321"]}};

        it('should call next', function (done) {
            let resMock = {


            };
            createNewDebtMw(objRepMock)(reqMock,resMock,function () {
             done();

            });

        });


    }) ;


    describe('comment is undefined and request is otherwise valid ',function () {


        let debtModelMock = {
            insertAllDebts: function (some, cb) {
                cb(undefined, undefined)
            }
        };
        let objRepMock={debtModel:debtModelMock};
        let reqMock={session:{userId:"userId"},body:{ sum:110 ,selectedUsers:["123321","321321321","321321321","321321321"]}};

        it('should call next', function (done) {
            let resMock = {  }

            createNewDebtMw(objRepMock)(reqMock,resMock,function () {
                done();
            });

        });


    }) ;

        describe('  session.userId undefined ',function () {


            let debtModelMock = {
                insertAllDebts: function (some, cb) {
                    cb(undefined, undefined)
                }
            };
            let objRepMock={debtModel:debtModelMock};
            let reqMock={body:{ sum:100, comment:"Komment",selectedUsers:["123321","321321321","321321321","321321321"]}};

            it('should respond with status 400', function (done) {
                let resMock = {
                    tpl:{error:[]},
                    status: function (code) {
                        expect(code).to.eql(400);
                        done();
                    }
                };
                createNewDebtMw(objRepMock)(reqMock,resMock,{});

            });


        }) ;

    describe('sum  undefined ',function () {


        let debtModelMock = {
            insertAllDebts: function (some, cb) {
                cb(undefined, undefined)
            }
        };
        let objRepMock={debtModel:debtModelMock};
        let reqMock={body:{   comment:"Komment",selectedUsers:["123321","321321321","321321321","321321321"]}};

        it('should respond with status 400', function (done) {
            let resMock = {
                tpl:{error:[]},
                status: function (code) {
                    expect(code).to.eql(400);
                    done();
                }
            };
            createNewDebtMw(objRepMock)(reqMock,resMock,{});

        });


    }) ;

    describe(' selected users  undefined ',function () {


        let debtModelMock = {
            insertAllDebts: function (some, cb) {
                cb(undefined, undefined)
            }
        };
        let objRepMock={debtModel:debtModelMock};
        let reqMock={body:{ sum:100, comment:"Komment" }};

        it('should respond with status 400', function (done) {
            let resMock = {
                tpl:{error:[]},
                status: function (code) {
                    expect(code).to.eql(400);
                    done();
                }
            };
            createNewDebtMw(objRepMock)(reqMock,resMock,{});

        });


    }) ;

    describe(' selected users  empty ',function () {


        let debtModelMock = {
            insertAllDebts: function (some, cb) {
                cb(undefined, undefined)
            }
        };
        let objRepMock={debtModel:debtModelMock};
        let reqMock={body:{ sum:100, comment:"Komment",selectedUsers:[] }};

        it('should respond with status 400', function (done) {
            let resMock = {
                tpl:{error:[]},
                status: function (code) {
                    expect(code).to.eql(400);
                    done();
                }
            };
            createNewDebtMw(objRepMock)(reqMock,resMock,{});

        });


    }) ;

        describe('dberror',function () {


            let debtModelMock = {
                insertAllDebts: function (some, cb) {
                    cb("Fatal error", undefined)
                }
            };
            let objRepMock={debtModel:debtModelMock};
            let reqMock={session:{userId:"userId"},body:{ sum:100, comment:"Komment",selectedUsers:["123321","321321321","321321321","321321321"]}};

            it('should respond with status 500 ', function (done) {
                let resMock = {
                    tpl:{error:[]},
                    status: function (code) {
                        expect(code).to.eql(500);
                        done();
                    }
                };
                createNewDebtMw(objRepMock)(reqMock,resMock,{});

            });


        }) ;
});