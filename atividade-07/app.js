import { client, connectToDB } from './connect.js';
import {
  searchCameraDupla,
  searchGamer,
  searchSmartWatch
} from './functions/functions.js';

try {
  await connectToDB();

  // await searchGamer(client); // a)
  // await searchSmartWatch(client); // b)
  // await searchCameraDupla(client); // c)
} catch (error) {
  console.error(error);
} finally {
  await client.close();
  process.exit(0);
}
