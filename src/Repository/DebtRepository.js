"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var debtSchema_1 = require("../models/debtSchema");
var RepositoryBase_1 = require("./RepositoryBase");
var userRepository_1 = require("./userRepository");
var DebtRepository = /** @class */ (function (_super) {
    __extends(DebtRepository, _super);
    function DebtRepository() {
        var _this = _super.call(this, debtSchema_1.DebtSchemaModel) || this;
        _this._userRepository = userRepository_1.UserRepository;
        return _this;
    }
    DebtRepository.prototype.find = function (cond, callback) {
        this._model.find(cond).populate("debtor").populate("debtee").exec(callback);
    };
    DebtRepository.prototype.findById = function (_id, callback) {
        this._model.findById(_id).populate("debtor").populate("debtee").exec(callback);
    };
    DebtRepository.prototype.findOne = function (cond, callback) {
        this._model.findOne(cond).populate("debtor").populate("debtee").exec(callback);
    };
    return DebtRepository;
}(RepositoryBase_1.RepositoryBase));
exports.DebtRepository = DebtRepository;
Object.seal(DebtRepository);
