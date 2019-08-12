'use strict';

const uuid = require('uuid/v4');
const util = require('util');
const file = require('../lib/files.js');
const Validator = require('../lib/validator.js');

class Model {

  constructor(schema) {
    this.dataFile = `${__dirname}/data/${schema.name}.json`;
    this.schema = schema;
  }

  /**
   * Every method needs to load the db before it can do it's work
   * This method is tested through the others, not directly
   *  -- that is an integration test!
   *
   * @returns
   * @memberof Model
   */
  async load() {
    try {
      const json = await file.read(this.dataFile);
      return json;
    }
    // Default to an empty array, file will auto create itself :)
    catch (e) { return {}; }
  }

  /**
   * Save the database array to a file
   * Every method needs to save the db after they run
   * This method is tested through the others, not directly
   *  -- that is an integration test!
   *
   * @param {*} db
   * @returns
   * @memberof Model
   */
  async save(db) {
    try {
      const saved = await file.write(this.dataFile, db);
      return true;
    }
    catch (e) { return false; }
  }


  /**
   * Gets one record (given an id) or all records from the DB
   *
   * @param {*} id
   * @returns
   * @memberof Model
   */
  async get(id) {
    try {
      let db = await this.load();
      let result = id ? db[id] : {count: Object.keys(db).length, results: Object.values(db)};
      return Promise.resolve(result);
    }
    catch (e) {
      return Promise.reject(e);
    }
  }

  /**
   * Create a new record
   * Async methods are technically promises,
   * so what they return is like a Promise.resolve()
   *
   * @param {*} record
   * @returns
   * @memberof Model
   */
  async create(record) {

    record.id = uuid();

    if ( ! this.valid(record) ) {  return Promise.reject('Invalid Record'); }

    if (record) {
      let db = await this.load();
      db[record.id] = record;
      const saved = await this.save(db);
      return saved ? Promise.resolve(record) : Promise.reject();
    }
    else {
      return Promise.reject();
    }
  }


  /**
   * Update a record
   * Async methods are technically promises,
   * so what they return is like a Promise.resolve()
   *
   * @param {*} id
   * @param {*} record
   * @returns
   * @memberof Model
   */
  async update(id, record) {

    if ( ! this.valid(record) ) {  return Promise.reject('Invalid Record'); }

    if (id && record) {
      let db = await this.load();
      db[id] = record;
      const saved = await this.save(db);
      return saved ? Promise.resolve(record) : Promise.reject();
    }
    else {
      return Promise.reject();
    }

  }


  /**
   * Delete a record
   * Async methods are technically promises,
   * so what they return is like a Promise.resolve()
   *
   * @param {*} id
   * @returns
   * @memberof Model
   */
  async delete(id) {
    let db = await this.load();
    delete db[id];
    const saved = await this.save(db);
    return saved ? Promise.resolve({}) : Promise.reject();
  }

  valid(record) {
    let validator = new Validator(this.schema);
    return validator.isValid(record);
  }

}

module.exports = Model;
