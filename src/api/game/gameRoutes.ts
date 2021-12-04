import fp from 'fastify-plugin';
import { gameService } from './gameService';
import { FastifyPluginAsync } from 'fastify';

interface Params {
  id: string;
}

export const gameRoutes: FastifyPluginAsync = fp(async (fastify) => {
  await fastify.register(gameService);

  fastify.get('/games', async (request, reply) => {
    const games = await fastify.gameService.getGames();
    reply.send(games);
  });

  fastify.get<{
    Params: Params;
  }>('/games/:id', async (request, reply) => {
    const id = Number(request.params.id);
    const game = await fastify.gameService.getGame(id);
    reply.send(game);
  });
});
