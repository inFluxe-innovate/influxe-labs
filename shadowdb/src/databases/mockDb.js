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

  findRecordById(id) {
      const record = this.records.find(record => record.id === id);
      if (!record) {
          throw new Error('Record not found');
      }
      return record;
  }

  findRecordsByField(fieldName, value) {
      return this.records.filter(record => record[fieldName] === value);
  }
}
