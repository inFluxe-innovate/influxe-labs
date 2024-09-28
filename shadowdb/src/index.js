// src/index.js

class ShadowDB {
  constructor(databaseType) {
      this.databaseType = databaseType;
      this.db = null;

      this.connect();
  }

  connect() {
      if (this.databaseType === 'mock') {
          this.db = new (require('./databases/mockDb'))();
      } else if (this.databaseType === 'postgres') {
          this.db = new (require('./databases/postgresDb'))();
      } else if (this.databaseType === 'mongo') {
          this.db = new (require('./databases/mongoDb'))();
      } else {
          throw new Error('Unsupported database type');
      }
  }

  addRecord(record) {
      if (this.db && typeof this.db.addRecord === 'function') {
          this.db.addRecord(record);
      } else {
          throw new Error('Database not initialized or addRecord method not defined');
      }
  }

  findAll() {
      if (this.db && typeof this.db.findAll === 'function') {
          return this.db.findAll();
      }
      throw new Error('Database not initialized or findAll method not defined');
  }
}

module.exports = ShadowDB;
