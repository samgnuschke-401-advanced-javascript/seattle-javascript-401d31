jest.mock('fs');

const faker = require('faker');
const files = require('../lib/files.js');
const DataModel = require('../models/model.js');

// Mocked Model Type for testing ...
class TestModel extends DataModel {
  constructor() {
    const schema = {
      name: 'test',
      fields: {
        id: {required: true},
        name: {required: true},
      },
    };
    super(schema);
  }
}

describe('Data Model', () => {

  // "global" for the test suite, we will use it to hold a new instance
  // for each test.
  let model;

  beforeEach(() => {
    model = new TestModel();
  });

  // After each test, send an empty value to the 'file'
  // (remember, fs is mocked, so this is all fake anyway)
  afterEach(() => {
    files.write('test.json', {});
  });

  it('can create() a new record in a model', () => {
    let obj = {name:faker.random.word()};
    return model.create(obj)
      .then( record => {
        expect(record.id).toBeDefined();
      })
      .catch(e => expect(e).not.toBeDefined());
  });

  it('can get() a record from a model', () => {
    let obj = {name:faker.random.word()};
    return model.create(obj)
      .then( record => model.get(record.id))
      .then( record => {
        expect(record.id).toBeDefined();
      })
      .catch(e => expect(e).not.toBeDefined());
  });

  it('can get() a list of records from a model', () => {
    let obj1 = {name:faker.random.word()};
    let obj2 = {name:faker.random.word()};
    return model.create(obj1)
      .then( record => model.create(obj2) )
      .then( record => model.get() )
      .then( results => {
        expect(results.count).toEqual(2);
        expect(results.results[0].name).toEqual(obj1.name);
        expect(results.results[1].name).toEqual(obj2.name);
      })
      .catch(e => expect(e).not.toBeDefined());
  });

  it('can update() a record in a model', () => {
    let firstWord = faker.random.word();
    let secondWord = faker.random.word();
    let obj = {name:firstWord};
    return model.create(obj)
      .then( record => {
        expect(record.name).toEqual(firstWord);
        let changedRecord = {id:record.id, name:secondWord};
        return model.update(record.id, changedRecord);
      })
      .then( record => {
        expect(record.name).toEqual(secondWord);
      })
      .catch(e => expect(e).not.toBeDefined());
  });

  it('can delete() a record from a model', () => {
    let obj = {name:faker.random.word()};
    return model.create(obj)
      .then( record => model.get(record.id))
      .then( record => {
        expect(record.id).toBeDefined();
        return model.delete(record.id);
      })
      // After the delete, do a get, confirming a 0 count
      .then( data => model.get())
      .then( data => {
        expect(data.count).toEqual(0);
      })
      .catch(e => expect(e).not.toBeDefined());
  });

  // Whole Lotta Happy Path testing there. What are our negative assertions?
  it('create() fails on an invalid record', () => {} );
  it('get(id) returns nothing on an invalid id', () => {} );
  // Can you think of others?

});

