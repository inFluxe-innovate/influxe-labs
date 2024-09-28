class MockDB {
  constructor() {
      this.records = [];
  }

  addRecord(record) {
      this.records.push(record);
  }

  findAll() {
      return this.records;
  }

  updateRecord(id, newData) {
      const index = this.records.findIndex(record => record.id === id);
      if (index !== -1) {
          this.records[index] = { ...this.records[index], ...newData };
      } else {
          throw new Error('Record not found');
      }
  }

  deleteRecord(id) {
      const index = this.records.findIndex(record => record.id === id);
      if (index !== -1) {
          this.records.splice(index, 1);
      } else {
          throw new Error('Record not found');
      }
  }

  clearRecords() {
      this.records = [];
  }
}

module.exports = MockDB;
