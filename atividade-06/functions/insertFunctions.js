import { newProducts } from '../import/task02.js';

// TAREFA 1 ----------------------------------------------------
export async function insertNewProduct(client) {
  const newProduct = {
    id_prod: 500,
    nome: 'Televisão 4K',
    descricao: 'Televisão 4K 50 polegadas com HDR e Smart TV',
    preco: 6000,
    importado: false,
    qtd_estoque: 10
  };

  await client.db('loja').collection('produtos').insertOne(newProduct);
  console.log('Novo produto inserido com sucesso!');
}

// TAREFA 2 ----------------------------------------------------
export async function insertManyProducts(client) {
  await client.db('loja').collection('produtos').insertMany(newProducts);
  console.log('Produtos inseridos com sucesso!');
}
