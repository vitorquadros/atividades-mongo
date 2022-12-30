// TAREFA 3.1 e 3.2 ----------------------------------------------------
export async function selectWithFilter(client) {
  const resultados = await client
    .db('loja')
    .collection('produtos')
    .find(
      {},
      {
        sort: {
          // tarefa 3.2
          qtd_estoque: 1
        },
        projection: {
          // tarefa 3.1
          _id: 0,
          importado: 0,
          descricao: 0
        }
      }
    )
    .toArray();

  console.table(resultados);
}

// TAREFA 3.3 ----------------------------------------------------
export async function selectByPrice(client) {
  const resultados = await client
    .db('loja')
    .collection('produtos')
    .find({
      preco: { $gt: 10000 }
    })
    .toArray();

  console.table(resultados);
}

// TAREFA 3.4 ----------------------------------------------------
export async function selectByStock(client) {
  const resultados = await client
    .db('loja')
    .collection('produtos')
    .find(
      {
        $and: [{ qtd_estoque: { $gte: 100 } }, { qtd_estoque: { $lte: 500 } }]
      },
      {
        sort: {
          qtd_estoque: -1
        }
      }
    )
    .toArray();

  console.table(resultados);
}

// TAREFA 3.5 ----------------------------------------------------
export async function selectByImported(client) {
  const resultados = await client
    .db('loja')
    .collection('produtos')
    .find(
      {
        importado: true
      },
      {
        sort: {
          preco: 1
        }
      }
    )
    .toArray();

  console.table(resultados);
}

// TAREFA 3.6 ----------------------------------------------------
export async function selectNot(client) {
  const resultados = await client
    .db('loja')
    .collection('produtos')
    .find({
      importado: { $not: { $eq: true } },
      preco: { $not: { $gt: 10000 } }
    })
    .toArray();

  console.table(resultados);
}

// TAREFA 3.7 ----------------------------------------------------
export async function selectBySpecificPrice(client) {
  const resultados = await client
    .db('loja')
    .collection('produtos')
    .find({
      preco: { $in: [2599.9, 3500, 4500, 18500, 20500] }
    })
    .toArray();

  console.table(resultados);
}

// TAREFA 3.8 ----------------------------------------------------
export async function selectStockNot150(client) {
  const resultados = await client
    .db('loja')
    .collection('produtos')
    .find({
      qtd_estoque: { $not: { $eq: 150 } }
    })
    .toArray();

  console.table(resultados);
}

// TAREFA 4 ------------------------------------------------------
export async function selectByDiscount(client) {
  const resultados = await client
    .db('loja')
    .collection('produtos')
    .find(
      {
        desconto: { $exists: true }
      },
      { sort: { desconto: -1 } }
    )
    .toArray();

  console.table(resultados);
}
