// src/index.js

const MockDB = require('./databases/mockDb');
const PostgresDB = require('./databases/postgresDb');
const MongoDB = require('./databases/mongoDb');

class ShadowDB {
    constructor(type) {
        this.type = type;
        this.connect();
    }

    connect() {
        if (this.type === 'mock') {
            this.db = new MockDB();
        } else if (this.type === 'postgres') {
            this.db = new PostgresDB();
        } else if (this.type === 'mongo') {
            this.db = new MongoDB();
        } else {
            throw new Error('Unsupported database type');
        }
    }

    // Example method to add data
    addData(collection, data) {
        if (!this.db) {
            throw new Error('Database not connected');
        }
        return this.db.addData(collection, data);
    }

    // Example method to retrieve data
    getData(collection) {
        if (!this.db) {
            throw new Error('Database not connected');
        }
        return this.db.getData(collection);
    }

    // Additional methods for your database operations can be added here
}

module.exports = ShadowDB;
