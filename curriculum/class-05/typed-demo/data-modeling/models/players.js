'use strict';

// The class 'has' the model, it doesn't extend it
const mongooseModel = require('./players-mongoose-model.js');

class Players {

  constructor() { }

  get(_id) {
    if(_id) { // Vinicio - if the id is defined
      return mongooseModel.findOne({_id});
      //return mongooseModel.findOne({_id: _id});
    }
    // //Find all?
    // return mongooseModel.find({});
    return Promise.reject(new Error('--Invalid Id--'));
  }

  getByName(name) {
    if(name) {
      return mongooseModel.find({name});
    }
    return Promise.reject(new Error('--Invalid Name--'));
  }

  create(record) {
    const newRecord = new mongooseModel(record);
    // Vinicio - this returns a promise that resolves into a new player
    return newRecord.save();
  }

  update(_id, record) {
    return mongooseModel.findByIdAndUpdate(_id, record, {new: true});
  }

  delete(_id) {
    return mongooseModel.findByIdAndDelete(_id);
  }
}

module.exports = Players;












