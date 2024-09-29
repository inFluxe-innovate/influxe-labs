class ShadowDB {
    constructor(databaseType) {
        this.databaseType = databaseType;
        this.db = [];
        this.transactions = [];
        this.loggingEnabled = true;
    }

    log(message) {
        if (this.loggingEnabled) {
            console.log(`[LOG]: ${message}`);
        }
    }

    addRecord(record) {
        this.validateRecord(record);
        this.db.push(record);
        this.log(`Record added: ${JSON.stringify(record)}`);
    }

    batchAdd(records) {
        records.forEach(record => this.addRecord(record));
    }

    findAll(page = 1, limit = 10) {
        const startIndex = (page - 1) * limit;
        return this.db.slice(startIndex, startIndex + limit);
    }

    findOne(query) {
        return this.db.find(record => Object.keys(query).every(key => record[key] === query[key])) || null;
    }

    findMulti(query) {
        return this.db.filter(record => Object.keys(query).every(key => record[key] === query[key]));
    }

    updateRecord(id, newData) {
        const recordIndex = this.db.findIndex(record => record.id === id);
        if (recordIndex !== -1) {
            this.db[recordIndex] = { ...this.db[recordIndex], ...newData };
            this.log(`Record updated: ${JSON.stringify(this.db[recordIndex])}`);
        }
    }

    batchUpdate(updates) {
        updates.forEach(update => {
            this.updateRecord(update.id, update.data);
        });
    }

    deleteRecord(id) {
        this.db = this.db.filter(record => record.id !== id);
        this.log(`Record deleted: ${id}`);
    }

    deleteMulti(query) {
        const toDelete = this.findMulti(query);
        this.db = this.db.filter(record => !toDelete.includes(record));
        this.log(`Deleted records matching query: ${JSON.stringify(query)}`);
    }

    clearRecords() {
        this.db = [];
        this.log('All records cleared.');
    }

    validateRecord(record) {
        // Implement your validation logic here
        if (!record.id || !record.name) {
            throw new Error('Record must have an id and a name.');
        }
    }

    search(criteria) {
        return this.db.filter(record => Object.keys(criteria).some(key => record[key] && record[key].toString().includes(criteria[key])));
    }

    beginTransaction() {
        this.transactions.push([]);
        this.log('Transaction started.');
    }

    commit() {
        if (this.transactions.length > 0) {
            this.transactions.pop();
            this.log('Transaction committed.');
        } else {
            throw new Error('No transaction to commit.');
        }
    }

    rollback() {
        if (this.transactions.length > 0) {
            this.transactions.pop();
            this.log('Transaction rolled back.');
        } else {
            throw new Error('No transaction to roll back.');
        }
    }

    sort(field, order = 'asc') {
        const sortedDb = [...this.db].sort((a, b) => {
            if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
            if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
            return 0;
        });
        return sortedDb;
    }

    enableLogging() {
        this.loggingEnabled = true;
    }

    disableLogging() {
        this.loggingEnabled = false;
    }
}

module.exports = ShadowDB;