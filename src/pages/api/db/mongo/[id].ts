import { NextApiRequest, NextApiResponse } from 'next';
import { connectMongoDB } from '@/config/ConnectMongoDB';
import { ObjectId } from 'mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { DB_NAME, COLLECTION_NAME_01 } = process.env;
  const { method } = req;

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

    const { id } = req.query;

    const collection = db.collection(collectionName);

    switch (method) {
      case 'DELETE':
        if (!id) {
          return res.status(400).json({ message: 'Missing ID' });
        }

        const idToUse = Array.isArray(id) ? id[0] : id;

        try {
          const objectId = new ObjectId(idToUse);
          const result = await collection.findOneAndDelete({ _id: objectId });

          if (result && result.value) {
            return res
              .status(201)
              .json({ message: 'Data deleted successfully!' });
          } else {
            return res.status(404).json({ message: 'Data not found' });
          }
        } catch (error) {
          return res.status(400).json({ message: 'Invalid ID' });
        }
    }
  } catch (error) {
    throw new Error(`${error}`);
  }
}
