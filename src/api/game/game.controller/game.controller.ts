import { FastifyPluginAsync } from 'fastify';
import { gameService } from '../game.service';
import { GET_GAMES_SCHEMA, GET_GAME_SCHEMA } from '../game.schema';
import { GetGamesRoute, GetGameRoute } from './types';

export const gameController: FastifyPluginAsync = async (fastify) => {
  fastify.register(gameService);

  fastify.route<GetGamesRoute>({
    method: 'GET',
    url: '/games',
    schema: GET_GAMES_SCHEMA,
    handler: async (request) => {
      const query = request.query;
      const games = await fastify.gameService.getGames(query);
      return games;
    },
  });

  fastify.route<GetGameRoute>({
    method: 'GET',
    url: '/games/:id',
    schema: GET_GAME_SCHEMA,
    handler: async (request) => {
      const id = Number(request.params.id);
      const game = await fastify.gameService.getGame(id);
      return game;
    },
  });
};
