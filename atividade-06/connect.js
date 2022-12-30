import { MongoClient } from 'mongodb';

const myDB = {
  server: 'localhost',
  port: 27017
};

const uri = `mongodb://${myDB.server}:${myDB.port}`;
export const client = new MongoClient(uri);

export async function connectToDB() {
  try {
    await client.connect();
    if (client.db('admin').command({ ping: 1 })) {
      console.log('Conectado!');
    } else throw Error('Erro ao conectar!');
  } catch (error) {
    console.error(error);
  }
}
