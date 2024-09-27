const { MongoClient } = require('mongodb');
const DBError = require('../errors/dbError');

class MongoDB {
  constructor() {
    this.client = new MongoClient(process.env.MONGO_URL);
    this.db = null;
  }

  async connect() {
    await this.client.connect();
    this.db = this.client.db('shadowdb');
  }

  async set(key, value) {
    await this.db.collection('data').updateOne({ key }, { $set: { value } }, { upsert: true });
  }

  async get(key) {
    const result = await this.db.collection('data').findOne({ key });
    return result ? result.value : null;
  }

  async delete(key) {
    await this.db.collection('data').deleteOne({ key });
  }

  async clear() {
    await this.db.collection('data').deleteMany({});
  }

  async close() {
    await this.client.close();
  }
}

module.exports = MongoDB;
