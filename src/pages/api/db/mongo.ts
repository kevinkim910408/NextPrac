import { NextApiRequest, NextApiResponse } from 'next';
import { connectMongoDB } from '@/config/ConnectMongoDB';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { DB_NAME, COLLECTION_NAME_01 } = process.env;
  if (!DB_NAME) {
    return res.status(500).json({ error: 'DB_NAME is not defined.' });
  }
  if (!COLLECTION_NAME_01) {
    return res
      .status(500)
      .json({ error: 'COLLECTION_NAME_01 is not defined.' });
  }

  try {
    const db = await connectMongoDB(DB_NAME);
    const collectionName = COLLECTION_NAME_01;

    const collection = db.collection(collectionName);
    const result = await collection.find().toArray();

    res.status(200).json({ data: result });
  } catch (error) {
    throw new Error(`${error}`);
  }
}
