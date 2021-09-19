import fp from 'fastify-plugin';
import fastifyMysql, { MySQLPromisePool } from 'fastify-mysql';
import { FastifyPluginAsync } from 'fastify';

declare module 'fastify' {
  interface FastifyInstance {
    mysql: MySQLPromisePool;
  }
}

const mysql: FastifyPluginAsync = async (fastify) => {
  fastify.register(fastifyMysql, {
    promise: true,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });
};

export default fp(mysql);
