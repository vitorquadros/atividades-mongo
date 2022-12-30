// TAREFA a) Mostrar todos os produtos com a descrição contendo a palavra GAMER.
export async function searchGamer(client) {
  // use loja;
  // db.getCollection('produtos').createIndex({descricao: 'text'})

  const termo = 'GAMER';
  const filtro = {
    $text: {
      $search: termo,
      $caseSensitive: true
    }
  };

  const collection = client.db('loja').collection('produtos');
  const resultados = await collection.find(filtro).toArray();
  console.table(resultados);
}

// TAREFA b) Mostrar todos os produtos que contenham a palavra SmartWatch no nome,
// considerando as letras maiúsculas e minúsculas
export async function searchSmartWatch(client) {
  // db.getCollection('produtos').dropIndex('descricao_text');
  // db.getCollection('produtos').createIndex({nome: 'text'})

  const termo = 'SmartWatch';
  const filtro = {
    $text: {
      $search: termo,
      $caseSensitive: true
    }
  };

  const collection = client.db('loja').collection('produtos');
  const resultados = await collection.find(filtro).toArray();
  console.table(resultados);
}

// TAREFA c) Mostrar os produtos que na descrição contenham a frase “Câmera Dupla”.
export async function searchCameraDupla(client) {
  // db.getCollection('produtos').dropIndex('nome_text');
  // db.getCollection('produtos').createIndex({descricao: 'text'})

  // prettier-ignore
  const termo = "\"Câmera Dupla\"";
  const filtro = {
    $text: {
      $search: termo,
      $caseSensitive: true,
      $diacriticSensitive: true
    }
  };

  const collection = client.db('loja').collection('produtos');
  const resultados = await collection.find(filtro).toArray();
  console.table(resultados);
}
