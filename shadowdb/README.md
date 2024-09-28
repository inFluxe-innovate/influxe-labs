# ShadowDB

A mock database for testing and development that supports multiple databases.

## Table of Contents
- [Installation](#installation)
- [Example Environment Variables](#example-environment-variables)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install ShadowDB using npm:

```bash
npm install shadowdb
```

## Example Environment Variables
To configure your database connections, create a .env file in the root of your project with the following format:

```
DB_TYPE=mock  # Change to postgres or mongo as needed
POSTGRES_URL=your_postgres_url
MONGO_URL=your_mongo_url
```

## Usage

Here’s how to use ShadowDB in your application:

```javascript
const ShadowDB = require('shadowdb');

// Create a new instance of ShadowDB with the desired database type
const db = new ShadowDB('mock');

// Add a record
db.addRecord({ id: 1, name: 'Example Record' });

// Retrieve all records
console.log(db.findAll());

// Update the record
db.updateRecord(1, { name: 'Updated Record' });
console.log(db.findAll());

// Delete the record
db.deleteRecord(1);
console.log(db.findAll());

// Clear all records
db.clearRecords();
console.log(db.findAll());

```

## API Documentation

### ShadowDB(databaseType)

- **Parameters**: 
  - `databaseType` (string): The type of database to connect to. Supported types are:
    - `'mock'`: Uses the mock database.
    - `'postgres'`: Connects to a PostgreSQL database (requires additional configuration).
    - `'mongo'`: Connects to a MongoDB database (requires additional configuration).

### Methods

- **addRecord(record)**: Adds a new record to the database.
  - **Parameters**: 
    - `record` (object): The record to be added.

- **findAll()**: Retrieves all records from the database.
  - **Returns**: An array of all records.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/MyFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/MyFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Key Sections Explained

- **Installation**: Instructions for installing the package via npm.
- **Usage**: Basic examples demonstrating how to use the package.
- **API Documentation**: Detailed information about the constructor and methods available in `ShadowDB`.
- **Contributing**: Guidelines for users who want to contribute to the project.
- **License**: Indicates the licensing terms for the package.