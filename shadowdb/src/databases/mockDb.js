// src/databases/mockDb.js

class MockDB {
  constructor() {
      this.data = [];
  }

  add(record) {
      this.data.push(record);
      return record;
  }

  findAll() {
      return this.data;
  }

  findById(id) {
      return this.data.find(record => record.id === id);
  }
}

module.exports = MockDB;
