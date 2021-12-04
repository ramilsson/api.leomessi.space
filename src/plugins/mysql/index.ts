import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import fastifyMysql, { MySQLPromisePool } from 'fastify-mysql';

declare module 'fastify' {
  interface FastifyInstance {
    mysql: MySQLPromisePool;
  }
}

export const mysql: FastifyPluginAsync = fp(async (fastify) => {
  fastify.register(fastifyMysql, {
    promise: true,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });
});
