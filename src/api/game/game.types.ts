import { Static as S } from '@sinclair/typebox';
import {
  GameParamsSchema,
  GameListQuerySchema,
  GameFieldSchema,
  GameStatusSchema,
  GameResultSchema,
  GameSchema,
} from './game.schema';

export type GameListQuery = S<typeof GameListQuerySchema>;
export type GameParams = S<typeof GameParamsSchema>;

export type GameField = S<typeof GameFieldSchema>;
export type GameStatus = S<typeof GameStatusSchema>;
export type GameResult = S<typeof GameResultSchema>;
export type Game = S<typeof GameSchema>;
