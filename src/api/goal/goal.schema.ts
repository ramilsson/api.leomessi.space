import { FastifySchema } from 'fastify';
import { Type as T } from '@sinclair/typebox';
import { ListQuerySchemaProps, TNullable, TStringEnum } from '../schema';
import { PlayerSchema } from 'api/player/player.schema';
import { TeamSchema } from 'api/team/team.schema';

export const GoalTypeSchema = TStringEnum(['DEFAULT', 'FREE_KICK', 'PENALTY']);

export const GoalSchema = T.Object(
  {
    id: T.Number(),
    type: GoalTypeSchema,
    timing: T.String(),
    game_id: T.Number(),
    player: PlayerSchema,
    assistant: TNullable(PlayerSchema),
    team: TeamSchema,
  },
  { $id: 'Goal' }
);

export const GoalListQuerySchema = T.Object(
  {
    ...ListQuerySchemaProps,
    ...{
      id: T.Optional(T.Number()),
      type: T.Optional(GoalTypeSchema),
      timing: T.Optional(T.String({ minLength: 1 })),
      game_id: T.Optional(T.Number()),
      team_id: T.Optional(T.Number()),
      player_id: T.Optional(T.Number()),
      assistant_id: T.Optional(TNullable(T.Number())),
    },
  },
  { additionalProperties: false }
);

export const GoalParamsSchema = T.Object({ id: T.Number({ minimum: 1 }) });

const GoalSchemaRef = T.Ref(GoalSchema);

export const GET_GOALS_SCHEMA: FastifySchema = {
  querystring: GoalListQuerySchema,
  summary: 'Get goals',
  tags: ['goals'],
  response: {
    200: { type: 'array', items: GoalSchemaRef },
  },
};

export const GET_GOAL_SCHEMA: FastifySchema = {
  params: GoalParamsSchema,
  summary: 'Get goal',
  tags: ['goals'],
  response: {
    200: GoalSchemaRef,
  },
};
