# ShadowDB

ShadowDB is a mock database for testing and development that supports multiple databases. With advanced features like batch operations, transactions, pagination, sorting, and more, ShadowDB aims to provide a versatile and efficient data handling experience for developers.

## Features

- **Multi-Database Support**: Connect to a mock database, PostgreSQL, or MongoDB.
- **Batch Operations**: Add and update multiple records simultaneously.
- **Search Functionality**: Filter records based on specific criteria.
- **Transactions**: Ensure data integrity with support for commit and rollback.
- **Pagination**: Efficiently handle large datasets with built-in pagination support.
- **Sorting**: Sort records by specified fields.
- **Event System**: Trigger actions when records are added, updated, or deleted.
- **Data Validation**: Enforce data integrity by validating records before adding or updating.
- **Logging**: Track operations with customizable logging levels.
- **Custom Configuration**: Customize behaviors such as validation rules and logging levels.
- **Migration Support**: Migrate data between different database types.
- **Error Handling**: Improved error messages and custom error types for better debugging.
- **Unit Tests**: A suite of unit tests ensuring code reliability.
- **Performance Optimizations**: Optimized for large datasets and complex queries.

## Table of Contents

- [Installation](#installation)
- [Example Environment Variables](#example-environment-variables)
- [Usage](#usage)
- [API Documentation](#api-documentation)
  - [Core Methods](#core-methods)
  - [New Features](#new-features)
- [License](#license)

## Installation

Install ShadowDB via npm:

```bash
npm install shadowdb
```

## Example Environment Variables

To configure your database connections, create a `.env` file in the root of your project with the following format:

```
DB_TYPE=mock  # or 'postgres' or 'mongo'
POSTGRES_URL=your_postgres_url
MONGO_URL=your_mongo_url
```

## Usage

Here's how to use ShadowDB:

```javascript
const ShadowDB = require('shadowdb');
const db = new ShadowDB('mock');

// Basic operations
db.addRecord({ id: 1, name: 'Example Record' });
console.log(db.findAll());
db.updateRecord(1, { name: 'Updated Record' });
db.deleteRecord(1);

// Advanced operations
db.batchAdd([{ id: 2, name: 'Record 2' }, { id: 3, name: 'Record 3' }]);
db.batchUpdate([{ id: 2, name: 'Updated Record 2' }, { id: 3, name: 'Updated Record 3' }]);
console.log(db.search({ name: 'Updated Record 2' }));

// Transactions
db.beginTransaction();
db.addRecord({ id: 4, name: 'Transaction Record' });
db.commit(); // or db.rollback();

// Pagination & Sorting
console.log(db.findAll({ page: 1, limit: 10, sortBy: 'name' }));
```

## API Documentation

### Core Methods

- **`addRecord(record)`**: Adds a new record to the database.

  ```javascript
  db.addRecord({ id: 1, name: 'New Record' });
  ```

- **`findAll(options)`**: Retrieves all records, optionally with pagination and sorting.

  ```javascript
  db.findAll({ page: 1, limit: 10 });
  ```

- **`updateRecord(id, newData)`**: Updates a specific record by ID.

  ```javascript
  db.updateRecord(1, { name: 'Updated Record' });
  ```

- **`deleteRecord(id)`**: Deletes a specific record by ID.

  ```javascript
  db.deleteRecord(1);
  ```

- **`clearRecords()`**: Removes all records from the database.

  ```javascript
  db.clearRecords();
  ```

### New Features

#### Batch Operations

- **`batchAdd(records)`**: Add multiple records at once.

  ```javascript
  db.batchAdd([{ id: 2, name: 'Record 2' }, { id: 3, name: 'Record 3' }]);
  ```

- **`batchUpdate(records)`**: Update multiple records simultaneously.

  ```javascript
  db.batchUpdate([{ id: 2, name: 'Updated Record 2' }, { id: 3, name: 'Updated Record 3' }]);
  ```

#### Search Functionality

- **`search(criteria)`**: Filter records based on specific criteria.

  ```javascript
  db.search({ name: 'Updated Record 2' });
  ```

#### Transactions

- **`beginTransaction()`**: Starts a transaction.

  ```javascript
  db.beginTransaction();
  ```

- **`commit()`**: Commits a transaction.

  ```javascript
  db.commit();
  ```

- **`rollback()`**: Rolls back a transaction.

  ```javascript
  db.rollback();
  ```

#### Pagination & Sorting

- **`findAll({ page, limit, sortBy })`**: Retrieve records with pagination and sorting.

  ```javascript
  db.findAll({ page: 1, limit: 10, sortBy: 'name' });
  ```

#### Event System

- **`on(event, callback)`**: Listen for database events (e.g., 'add', 'update', 'delete').

  ```javascript
  db.on('add', (record) => console.log('Record added:', record));
  ```

#### Data Validation

- **`addRecord(record, { validate: true })`**: Validate records before adding or updating.

  ```javascript
  db.addRecord({ id: 5, name: 'Validated Record' }, { validate: true });
  ```

#### Logging & Configuration

- **`setLogging(level)`**: Configure logging levels (e.g., 'info', 'warn', 'error').

  ```javascript
  db.setLogging('info');
  ```

- **`configure(options)`**: Set custom configurations like validation rules and logging.

  ```javascript
  db.configure({ logging: true, validate: true });
  ```

#### Migration Support

- **`migrateData(targetDatabase)`**: Migrate data between different database types.

  ```javascript
  db.migrateData('postgres');
  ```

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/inFluxe-innovate/influxe-labs/blob/main/shadowdb/LICENSE) file for more details.
