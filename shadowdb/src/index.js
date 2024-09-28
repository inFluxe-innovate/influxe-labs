class ShadowDB {
  constructor(databaseType) {
      this.connect(databaseType);
  }

  connect(databaseType) {
      if (databaseType === 'mock') {
          this.db = new (require('./databases/mockDb'))();
      } else {
          throw new Error('Unsupported database type');
      }
  }

  addRecord(record) {
      this.db.addRecord(record);
  }

  findAll() {
      return this.db.findAll();
  }

  updateRecord(id, newData) {
      return this.db.updateRecord(id, newData);
  }

  deleteRecord(id) {
      return this.db.deleteRecord(id);
  }

  clearRecords() {
      return this.db.clearRecords();
  }
}

module.exports = ShadowDB;
