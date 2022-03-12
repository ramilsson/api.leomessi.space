import { FastifySchema } from 'fastify';
import { Type } from '@sinclair/typebox';
import { GET_LIST_QUERY } from '../schema';
import { GameField, GameStatus } from './types';

export const GET_GAMES_QUERY = {
  id: Type.Optional(Type.Number()),
  field: Type.Optional(Type.Enum(GameField)),
  round: Type.Optional(Type.String()),
  season: Type.Optional(Type.String()),
  status: Type.Optional(Type.Enum(GameStatus)),
  team_id: Type.Optional(Type.Number()),
  opponent_id: Type.Optional(Type.Number()),
  competition_id: Type.Optional(Type.Number()),
  stadium_id: Type.Optional(Type.Number()),
};

export const GET_GAME_PARAMS = { id: Type.Number() };

export const GET_GAMES_QUERY_SCHEMA = Type.Object(
  { ...GET_LIST_QUERY, ...GET_GAMES_QUERY },
  { additionalProperties: false }
);

export const GET_GAME_PARAMS_SCHEMA = Type.Object(GET_GAME_PARAMS);

export const GET_GAMES_SCHEMA: FastifySchema = {
  querystring: GET_GAMES_QUERY_SCHEMA,
  summary: 'Get games',
  tags: ['games'],
};

export const GET_GAME_SCHEMA: FastifySchema = {
  params: GET_GAME_PARAMS_SCHEMA,
  summary: 'Get game',
  tags: ['games'],
};
