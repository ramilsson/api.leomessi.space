import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import { gameRoutes } from './gameRoutes';
import { IGameRepository, IGameService } from './interfaces';

declare module 'fastify' {
  interface FastifyInstance {
    gameRepository: IGameRepository;
    gameService: IGameService;
  }
}

export const gameApi: FastifyPluginAsync = fp(async (fastify) => {
  fastify.register(gameRoutes);
});
