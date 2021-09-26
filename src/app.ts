import fastify from 'fastify';
import plugins from './plugins';
import modules from './modules';

const server = fastify({ logger: true });

server.register(plugins);
server.register(modules);

const start = async () => {
  try {
    await server.listen(8000);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
