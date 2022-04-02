const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from this NodeJS app!</h1>
    <p>HELLO KUBERNETES and devcontainer</p>
    <p>Try sending a request to /error and see what happens</p>
  `).status(200);
});

app.get('/error', (req, res) => {
  console.log('Error ...');
  process.exit(1);
});
setInterval(() => {
  console.log('Serwer working ... on 8080');  
}, 5000);
app.listen(8080);
