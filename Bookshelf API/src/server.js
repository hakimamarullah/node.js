const hapi = require('@hapi/hapi');
const routes = require('./routes');

const initServer = async () => {
  const server = hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  server.route(routes);
  await server.start();
  console.log(`Server sedang berjalan pada ${server.info.uri}`);
};

initServer();
