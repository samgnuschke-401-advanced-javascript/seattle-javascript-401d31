'use strict';

class Model {

  constructor(schema) {
    this.schema = schema;
  }

  get(_id) {
    if (_id) return this.schema.findOne(_id);
    return this.schema.find({});
  }

  create(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }
}

module.exports = Model;
