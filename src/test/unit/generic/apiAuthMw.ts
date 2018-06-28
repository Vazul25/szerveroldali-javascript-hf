var expect=require('chai').expect;
var apiAuthMw=require('../../../middlewares/generic/apiAuthMw');

describe('ApiAuthMw',function () {


    describe('No password',function () {
        let userModelMock = {
            findWithPassword: function (some, cb) {
                cb(undefined, {email:'TestEmail@azaz.com', _id:"random"})
            }
        };
        let objRepMock={userModel:userModelMock};
        let reqMock={body:{ email:'TestEmail@azaz.com'}};


        it('should respond with status 401', function (done) {
            let mockRes = {
                tpl:{error:[]},
                status: function (code) {
                    expect(code).to.eql(401);
                    done();
                }
            };
            apiAuthMw(objRepMock)(reqMock,mockRes,{});
        });
    }) ;


    describe('No password',function () {
        let userModelMock = {
            findWithPassword: function (some, cb) {
                cb(undefined, {email:'TestEmail@azaz.com', _id:"random"})
            }
        };
        let objRepMock={userModel:userModelMock};
        let reqMock={body:{ email:'TestEmail@azaz.com'}};


        it('should respond with status 401', function (done) {
            let mockRes = {
                tpl:{error:[]},
                status: function (code) {
                    expect(code).to.eql(401);
                    done();
                }
            };
            apiAuthMw(objRepMock)(reqMock,mockRes,{});
        });
    }) ;





    describe('No email',function () {


        let reqMock={body:{password:'123456' }};


        it('should respond with status 401', function (done) {

            let mockRes = {
                tpl:{error:[]},
                status: function (code) {
                    expect(code).to.eql(401);
                    done();
                }
            };
            apiAuthMw({userModel:{}})(reqMock,mockRes,{});
        });
    }) ;

    describe('No body',function () {
        let userModelMock = {
            findWithPassword: function (some, cb) {
                cb(undefined, {email:'TestEmail@azaz.com',password:'123456'})
            }
        };
        let reqMock={};




        it('should respond status 401 ', function (done) {
            let mockRes ={
                tpl:{error:[]},
                status: function (code) {
                    expect(code).to.eql(401);
                    done();
                }
            };
            apiAuthMw({userModel:{}})(reqMock,mockRes,{});
        });
    }) ;
    describe('Matching Password and email is given in body ',function () {
        it('should call next ', function (done) {
            let userModelMock = {
                findWithPassword: function (some, cb) {
                    cb(undefined, {email:'TestEmail@azaz.com',password:'123456',_id:"random"})
                }
            };
            let objRepMock={userModel:userModelMock};
            let ReqMock={body:{password:'123456',email:'TestEmail@azaz.com'},session:{}};



            apiAuthMw(objRepMock)(ReqMock,{},function () {
                done()
            });

        });
    }) ;

    describe('Bad password',function () {
        let userModelMock = {
            findWithPassword: function (some, cb) {
                cb(undefined, {email:'TestEmail@azaz.com',password:'123456',_id:"random"})
            }
        };
        let objRepMock={userModel:userModelMock};
        let ReqMock={body:{password:'2',email:'TestEmail@azaz.com'},session:{}};

        it('should call next ', function (done) {
            let mockRes ={
                tpl:{error:[]},
                status: function (code) {
                    expect(code).to.eql(401);
                    done();
                }
            };

            apiAuthMw(objRepMock)(ReqMock,mockRes,{ });

        });
    }) ;
    describe('Bad email',function () {
        let userModelMock = {
            findWithPassword: function (some, cb) {
                cb("Not found", {})
            }
        };
        let objRepMock={userModel:userModelMock};
        let ReqMock={body:{password:'2',email:'TestEmail@azaz.com'},session:{}};

        it('should call next ', function (done) {
            let mockRes ={
                tpl:{error:[]},
                status: function (code) {
                    expect(code).to.eql(401);
                    done();
                }
            };

            apiAuthMw(objRepMock)(ReqMock,mockRes,{ });

        });
    }) ;
});