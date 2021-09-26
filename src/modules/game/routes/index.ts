import fp from 'fastify-plugin';
import gameService from '../services';
import { FastifyPluginAsync } from 'fastify';

interface IParams {
  id: string;
}

const gameRoutes: FastifyPluginAsync = async (fastify) => {
  await fastify.register(gameService);

  fastify.get('/games', async (request, reply) => {
    const games = await fastify.gameService.getGames();
    reply.send(games);
  });

  fastify.get<{
    Params: IParams;
  }>('/games/:id', async (request, reply) => {
    const id = Number(request.params.id);
    const game = await fastify.gameService.getGame(id);
    reply.send(game);
  });
};

export default fp(gameRoutes);
