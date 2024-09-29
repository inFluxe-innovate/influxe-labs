class ShadowDB {
    constructor(databaseType) {
        this.databaseType = databaseType;
        this.records = [];

        if (databaseType === 'mock') {
            this.db = new (require('./databases/mockDb'))();
        } else if (databaseType === 'postgres') {
            this.db = new (require('./databases/postgresDb'))();
        } else if (databaseType === 'mongo') {
            this.db = new (require('./databases/mongoDb'))();
        } else {
            throw new Error('Unsupported database type');
        }
    }

    addRecord(record) {
        this.records.push(record);
        return record;
    }

    findRecord(id) {
        return this.records.find(record => record.id === id);
    }

    findOne(query) {
        return this.records.find(record => {
            return Object.keys(query).every(key => record[key] === query[key]);
        });
    }

    findMulti(query) {
        return this.records.filter(record => {
            return Object.keys(query).every(key => record[key] === query[key]);
        });
    }

    deleteMulti(query) {
        const originalLength = this.records.length;
        this.records = this.records.filter(record => {
            return !Object.keys(query).every(key => record[key] === query[key]);
        });
        return originalLength - this.records.length; // Number of records deleted
    }

    updateRecord(id, updatedRecord) {
        const index = this.records.findIndex(record => record.id === id);
        if (index !== -1) {
            this.records[index] = updatedRecord;
            return updatedRecord;
        } else {
            throw new Error('Record not found');
        }
    }

    findAll() {
        return this.records;
    }
}

module.exports = ShadowDB;
