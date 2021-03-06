import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import fastifySwagger from 'fastify-swagger';

export const swagger: FastifyPluginAsync = fp(async (fastify) => {
  fastify.register(fastifySwagger, {
    routePrefix: '/docs',
    swagger: {
      info: {
        title: 'Leo Messi API',
        version: '0.1.0',
      },
      externalDocs: {
        url: 'https://github.com/khuzhinru/api.leomessi.space',
        description: 'GitHub',
      },
      host: 'api.leomessi.space',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'games', description: 'Game related endpoints' },
        { name: 'goals', description: 'Goal related endpoints' },
      ],
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header',
        },
      },
    },
    uiConfig: {
      deepLinking: false,
    },
    uiHooks: {
      onRequest: function (request, reply, next) {
        next();
      },
      preHandler: function (request, reply, next) {
        next();
      },
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    exposeRoute: true,
  });
});
