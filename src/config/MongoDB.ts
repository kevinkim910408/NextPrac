import { MongoClient } from 'mongodb';

const { MONGO_URI } = process.env;

if (!MONGO_URI) throw new Error('MONGO_URI is not defined.');

export const connectMongoDB = async (db: string) => {
  const client = await MongoClient.connect(MONGO_URI);
  return client.db(db);
};
