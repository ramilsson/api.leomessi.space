import fp from 'fastify-plugin';
import { gameController } from './game.controller';
import { IGameRepository } from './game.repository/types';
import { IGameService } from './game.service/types';
import { GameSchema } from './game.schema';

declare module 'fastify' {
  interface FastifyInstance {
    gameRepository: IGameRepository;
    gameService: IGameService;
  }
}

export const gameApi = fp(async (fastify) => {
  fastify.register(gameController);
  fastify.addSchema(GameSchema);
});
