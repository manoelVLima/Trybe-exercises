// ./main.ts

import connection from './models/connection';

const main = async () => {
  const result = await connection.execute('SELECT * FROM books');
  const [rows] = result;
  console.log(rows);
  console.log('efddfgfgg');



};

main();