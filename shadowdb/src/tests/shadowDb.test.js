// src/tests/shadowDb.test.js

const ShadowDB = require('../index');

describe('ShadowDB', () => {
    let db;

    beforeEach(() => {
        db = new ShadowDB('mock');
    });

    test('should connect to the mock database', () => {
        expect(db.db).toBeDefined();
    });

    test('should add a record to the mock database', () => {
        const record = { id: 1, name: 'Test Record' };
        db.db.add(record);
        expect(db.db.findAll()).toContainEqual(record);
    });

    test('should find a record by id', () => {
        const record = { id: 1, name: 'Test Record' };
        db.db.add(record);
        const foundRecord = db.db.findById(1);
        expect(foundRecord).toEqual(record);
    });
});
