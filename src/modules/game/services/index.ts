import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import gameRepository, { GameRepository } from '../repository';
import { IGameRow } from '../repository/types';

interface IGameService {
  repository: GameRepository;

  getGames: () => Promise<IGameRow[]>;
  getGame: (id: number) => Promise<IGameRow>;
}

class GameService implements IGameService {
  repository: GameRepository;

  constructor(repository: GameRepository) {
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

declare module 'fastify' {
  interface FastifyInstance {
    gameService: GameService;
  }
}

const gameService: FastifyPluginAsync = async (fastify) => {
  await fastify.register(gameRepository);

  fastify.decorate('gameService', new GameService(fastify.gameRepository));
};

export default fp(gameService);
