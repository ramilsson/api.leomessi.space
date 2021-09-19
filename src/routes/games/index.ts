import fp from 'fastify-plugin';
import gamesService from '../../services/games';
import { FastifyPluginAsync } from 'fastify';

const gamesRoute: FastifyPluginAsync = async (fastify) => {
  await fastify.register(gamesService);

  fastify.get('/games', async (request, reply) => {
    const games = await fastify.gamesService.getGames();
    reply.send(games);
  });
  fastify.get('/games/:id', async (request, reply) => {
    const gameId = request.params.id;
    const game = await fastify.gamesService.getGame(gameId);
    reply.send(game);
  });
};

export default fp(gamesRoute);
