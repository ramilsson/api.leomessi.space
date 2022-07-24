import { gameController } from './game.controller';
import { IGameRepository } from './game.repository/types';
import { IGameService } from './game.service/types';
import { GameSchema } from './game.schema';
import { FastifyPluginAsync } from 'fastify';

declare module 'fastify' {
  interface FastifyInstance {
    gameRepository: IGameRepository;
    gameService: IGameService;
  }
}

export const gameApi: FastifyPluginAsync = async (fastify) => {
  fastify.register(gameController);
  fastify.addSchema(GameSchema);
};
