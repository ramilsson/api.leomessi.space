import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import { gameRepository } from './gameRepository';
import { IGameRepository, IGameService } from './interfaces';

class GameService implements IGameService {
  repository: IGameRepository;

  constructor(repository: IGameRepository) {
    this.repository = repository;
  }

  getGames = async () => {
    const games = await this.repository.getGames();
    return games;
  };

  getGame = async (id: number) => {
    const game = await this.repository.getGame(id);
    return game;
  };
}

export const gameService: FastifyPluginAsync = fp(async (fastify) => {
  await fastify.register(gameRepository);
  fastify.decorate('gameService', new GameService(fastify.gameRepository));
});
