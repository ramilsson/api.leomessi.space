import { FastifySchema } from 'fastify';
import { Type } from '@sinclair/typebox';
import { GET_LIST_QUERY } from '../schema';
import { GoalType } from './types';

export const GET_GOALS_QUERY = {
  id: Type.Optional(Type.Number()),
  type: Type.Optional(Type.Enum(GoalType)),
  timing: Type.Optional(Type.String({ minLength: 1 })),
  game_id: Type.Optional(Type.Number()),
  team_id: Type.Optional(Type.Number()),
  player_id: Type.Optional(Type.Number()),
  assistant_id: Type.Optional(Type.Union([Type.Number(), Type.Null()])),
};

export const GET_GOAL_PARAMS = { id: Type.Number({ minimum: 1 }) };

export const GET_GOALS_QUERY_SCHEMA = Type.Object(
  { ...GET_LIST_QUERY, ...GET_GOALS_QUERY },
  { additionalProperties: false }
);

export const GET_GOAL_PARAMS_SCHEMA = Type.Object(GET_GOAL_PARAMS);

export const GET_GOALS_SCHEMA: FastifySchema = {
  querystring: GET_GOALS_QUERY_SCHEMA,
  summary: 'Get goals',
  tags: ['goals'],
};

export const GET_GOAL_SCHEMA: FastifySchema = {
  params: GET_GOAL_PARAMS_SCHEMA,
  summary: 'Get goal',
  tags: ['goals'],
};
