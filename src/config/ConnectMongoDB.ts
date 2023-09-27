import { MongoClient } from 'mongodb';

const { MONGO_URI } = process.env;
if (!MONGO_URI) throw new Error('MONGO_URI is not defined.');

let client: MongoClient | undefined;

export const connectMongoDB = async (db: string) => {
  let globalWithMongoClient = global as typeof globalThis & {
    mongo: MongoClient;
  };

  if (!client) {
    client = await MongoClient.connect(MONGO_URI);
    globalWithMongoClient.mongo = client;
  }

  return client.db(db);
};
