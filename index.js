const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db/db.json');
const cors = require('cors');

// Middlewares padrão do json-server
const middlewares = jsonServer.defaults();

// Usar CORS para permitir requisições de outras origens
server.use(cors());
server.use(middlewares);
server.use(router);

// Iniciar o servidor na porta 3000
server.listen(3001, () => {
    console.log('JSON Server is running em http://localhost:3001');
  });
  
