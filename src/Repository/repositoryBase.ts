


import { Document, Schema, Model, Types,DocumentQuery} from "mongoose";

interface Read<T> {
    retrieve: (callback: (error: any, result: any)=> void)=> void;
    findById: (id: string, callback: (error:any, result: T) => void) => void;
}

interface Write<T> {
    create: (item:T, callback: (error: any, result: any ) => void) => void;
    update:(_id: Types.ObjectId, item:T, callback: (error: any, result: any)=> void) => void ;
    updateAll:(cond: Object, updateTo: Object, options: Object,callback: (error: any, result: any) => void) => void ;
    delete: (_id: string, callback: (error: any, result: any) => void) => void;
    insertMany:(list:T[],callback: (error: any, result: any) => void)=>void;
}
export class RepositoryBase<T extends Document> implements Read<T>, Write<T> {

    updateAll (cond: Object, updateTo: Object, options: Object, callback: (error: any, result: any) => void){
        this._model.update(cond,updateTo,options,callback);
    }

    protected _model: Model<Document>;

    constructor (schemaModel: Model<Document>) {
        this._model = schemaModel;
    }

    create (item: T, callback: (error: any, result: any) => void) {
        this._model.create(item, callback);

    }

    retrieve (callback: (error: any, result: any) => void) {
        this._model.find({}, callback)
    }

    update (_id: Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
        this._model.update({_id: _id}, item, callback);

    }


    delete (_id: string, callback:(error: any, result: any) => void) {
        this._model.remove({_id: this.toObjectId(_id)}, (err) => callback(err, null));

    }

    find (cond: any, callback: (error: any, result: T) => void) {
        this._model.find( cond, callback);
    }

    findById (_id: string, callback: (error: any, result: T) => void) {
        this._model.findById( _id, callback);
    }
    findOne (cond: any, callback: (error: any, result: T) => void) {
        this._model.findOne( cond, callback);
    }

    insertMany(list:T[],callback: (error: any, result: any) => void){
        this._model.insertMany(list,callback);
    }

    protected toObjectId (_id: string) : Types.ObjectId {
        return Types.ObjectId.createFromHexString(_id)
    }

}