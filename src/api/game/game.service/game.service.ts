import fp from 'fastify-plugin';
import { gameRepository } from '../game.repository';
import { normalizeGameResult } from './utils';
import { IGameRepository } from '../game.repository/types';
import { GetGamesQuery } from '../types';
import { IGameService } from './types';

class GameService implements IGameService {
  repository: IGameRepository;

  constructor(repository: IGameRepository) {
    this.repository = repository;
  }

  getGames = async (query?: GetGamesQuery) => {
    const gameRows = await this.repository.getGames(query);

    const games = gameRows.map((gameRow) => {
      return {
        ...gameRow,
        result: normalizeGameResult(gameRow.result),
      };
    });

    return games;
  };

  getGame = async (id: number) => {
    const gameRow = await this.repository.getGame(id);

    const game = {
      ...gameRow,
      result: normalizeGameResult(gameRow.result),
    };

    return game;
  };
}

export const gameService = fp(async (fastify) => {
  await fastify.register(gameRepository);
  fastify.decorate('gameService', new GameService(fastify.gameRepository));
});
