import fastify from 'fastify';
import { plugins } from './plugins';
import { api } from './api';

const server = fastify({
  logger: {
    prettyPrint: {
      levelFirst: true,
    },
  },
});

server.register(plugins);
server.register(api);

const start = async () => {
  try {
    await server.listen(process.env.PORT || 8000);
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
