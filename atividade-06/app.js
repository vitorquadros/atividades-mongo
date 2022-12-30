import { client, connectToDB } from './connect.js';
import {
  insertManyProducts,
  insertNewProduct
} from './functions/insertFunctions.js';
import {
  selectByDiscount,
  selectByImported,
  selectByPrice,
  selectBySpecificPrice,
  selectByStock,
  selectNot,
  selectStockNot150,
  selectWithFilter
} from './functions/selectFunctions.js';

try {
  await connectToDB();

  //   await insertNewProduct(client); // Tarefa 1
  //   await insertManyProducts(client); // Tarefa 2
  //   await selectWithFilter(client); // Tarefa 3.1, 3.2
  //   await selectByPrice(client); // Tarefa 3.3
  //   await selectByStock(client); // Tarefa 3.4
  //   await selectByImported(client); // Tarefa 3.5
  //   await selectNot(client); // Tarefa 3.6
  //   await selectBySpecificPrice(client); // Tarefa 3.7
  //   await selectStockNot150(client); // Tarefa 3.8
  //   await selectByDiscount(client); // Tarefa 4
} catch (error) {
  console.error(error);
} finally {
  await client.close();
  process.exit(0);
}
