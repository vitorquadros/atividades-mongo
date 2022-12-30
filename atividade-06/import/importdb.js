import { MongoClient } from 'mongodb';
import { promises as fs } from 'fs';

const myDB = {
  server: 'localhost',
  port: 27017
};
const uri = `mongodb://${myDB.server}:${myDB.port}`;
const client = new MongoClient(uri);

try {
  await client.connect();
  if (!client.db('admin').command({ ping: 1 }))
    throw Error('Erro ao conectar ao banco !!');
  console.log('Conectado!');

  const data = await fs.readFile('./import/loja.json');
  const produtos = JSON.parse(data);

  if (typeof produtos === 'undefined' && !produtos)
    throw Error('Arquivo não encontrado!!');

  const mongoDb = client.db('loja');
  const mongoCollection = mongoDb.collection('produtos');
  const result = await mongoCollection.insertMany(produtos);
  if (result.insertedCount == 0) throw Error('Erro ao importar protudos!');
  console.info('Produtos importados com sucesso!');
  console.log({
    sucess: true,
    inserted: result.insertedCount,
    result: result
  });
} catch (error) {
  console.log(error);
} finally {
  await client.close();
  process.exit(0);
}
