import express from 'express';
import '#db';

const app = express();
const port = 3000;

console.log('Hello');

app.listen(port, () =>
  console.log(`\x1b[34mMain app listening at http://localhost:${port}\x1b[0m`)
);
