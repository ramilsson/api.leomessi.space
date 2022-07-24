import { FastifySchema } from 'fastify';
import { Type as T } from '@sinclair/typebox';
import { ListQuerySchemaProps, TStringEnum, TNullable } from '../schema';

export const GameFieldSchema = TStringEnum(['HOME', 'AWAY']);

export const GameStatusSchema = TStringEnum(['NOT_STARTED', 'STARTED', 'FINISHED', 'CANCELED']);

export const GameResultSchema = T.Object(
  {
    fulltime: TNullable(T.Tuple([T.Number(), T.Number()])),
    overtime: TNullable(T.Tuple([T.Number(), T.Number()])),
    penalty: TNullable(T.Tuple([T.Number(), T.Number()])),
    total: TNullable(T.Tuple([T.Number(), T.Number()])),
  },
  { $id: 'GameResult' }
);

export const GameSchema = T.Object(
  {
    id: T.Number(),
    field: TNullable(GameFieldSchema),
    round: TNullable(T.String()),
    season: T.String(),
    status: GameStatusSchema,
    datetime: T.String(),
    team: T.Object({ id: T.Number(), name: T.String() }),
    opponent: T.Object({ id: T.Number(), name: T.String() }),
    competition: T.Object({ id: T.Number(), name: T.String() }),
    stadium: T.Object({ id: T.Number(), name: T.String() }),
    result: GameResultSchema,
  },
  { $id: 'Game' }
);

export const GameListQuerySchema = T.Object({
  ...ListQuerySchemaProps,
  ...{
    id: T.Optional(T.Number()),
    field: T.Optional(GameFieldSchema),
    round: T.Optional(T.String()),
    season: T.Optional(T.String()),
    status: T.Optional(GameStatusSchema),
    team_id: T.Optional(T.Number()),
    opponent_id: T.Optional(T.Number()),
    competition_id: T.Optional(T.Number()),
    stadium_id: T.Optional(T.Number()),
  },
});

export const GameParamsSchema = T.Object({ id: T.Number() });

const GameSchemaRef = T.Ref(GameSchema);

export const GET_GAMES_SCHEMA: FastifySchema = {
  querystring: GameListQuerySchema,
  summary: 'Get games',
  tags: ['games'],
  response: {
    200: { type: 'array', items: GameSchemaRef },
  },
};

export const GET_GAME_SCHEMA: FastifySchema = {
  params: GameParamsSchema,
  summary: 'Get game',
  tags: ['games'],
  response: {
    200: GameSchemaRef,
  },
};
