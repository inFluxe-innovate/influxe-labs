const ShadowDB = require('./index');

const db = new ShadowDB('mock');

// Add some records
db.db.add({ id: 1, name: 'Record One' });
db.db.add({ id: 2, name: 'Record Two' });

// Retrieve all records
console.log(db.db.findAll());

// Find a record by ID
console.log(db.db.findById(1));
