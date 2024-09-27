const { Client } = require('pg');
const DBError = require('../errors/dbError');

class PostgresDB {
  constructor() {
    this.client = new Client({
      connectionString: process.env.POSTGRES_URL,
    });
  }

  async connect() {
    await this.client.connect();
  }

  async set(key, value) {
    await this.client.query('INSERT INTO data(key, value) VALUES($1, $2)', [key, value]);
  }

  async get(key) {
    const res = await this.client.query('SELECT value FROM data WHERE key = $1', [key]);
    return res.rows[0] ? res.rows[0].value : null;
  }

  async delete(key) {
    await this.client.query('DELETE FROM data WHERE key = $1', [key]);
  }

  async clear() {
    await this.client.query('DELETE FROM data');
  }

  async close() {
    await this.client.end();
  }
}

module.exports = PostgresDB;
