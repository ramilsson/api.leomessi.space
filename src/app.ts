import fastify from 'fastify';
import mysql from './plugins/mysql';
import routes from './routes';

const server = fastify({ logger: true });

server.register(mysql);
server.register(routes);

const start = async () => {
  try {
    await server.listen(8000);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
