import 'module-alias/register';

import Fastify from 'fastify';
import { plugins } from './plugins';
import { api } from './api';

const fastify = Fastify({
  logger: {
    prettyPrint: { levelFirst: true },
  },
  ignoreTrailingSlash: true,
});

fastify.register(plugins);
fastify.register(api);

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 8000);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
