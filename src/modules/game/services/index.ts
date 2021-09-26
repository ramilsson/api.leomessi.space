import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import gameRepository, { GameRepository } from '../repository';
import { formatResult } from './helpers';

import { IGameRow } from '../repository/types';
import { GameStatus } from './types';

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

    return games.map((game) => {
      if (game.status === GameStatus.FINISHED && game.result.fulltime) {
        game.result = formatResult(game.result);
      }
      return game;
    });
  };

  getGame = async (id: number) => {
    const game = await this.repository.getGame(id);

    if (game.status === GameStatus.FINISHED && game.result.fulltime) {
      game.result = formatResult(game.result);
    }

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
