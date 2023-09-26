import { connectMongoDB } from '@/config/MongoDB';

const { DB_NAME, COLLECTION_NAME_01 } = process.env;

const MongoComponent = async () => {
  if (!DB_NAME) throw new Error('DB_NAME is not defined.');
  if (!COLLECTION_NAME_01)
    throw new Error('COLLECTION_NAME_01 is not defined.');

  const db = await connectMongoDB(DB_NAME);
  const collectionName = COLLECTION_NAME_01;

  const collection = db.collection(collectionName);
  const result = await collection.find().toArray();

  console.log(result);

  return <main>{result[0].name}</main>;
};

export default MongoComponent;
