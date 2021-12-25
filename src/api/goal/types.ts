import { RowDataPacket } from 'mysql2';
import { Static } from '@sinclair/typebox';
import { Player } from 'api/player/types';
import { Team } from 'api/team/types';
import { GET_GOAL_PARAMS_SCHEMA, GET_GOALS_QUERY_SCHEMA } from './schema';

export type GetGoalsQuery = Static<typeof GET_GOALS_QUERY_SCHEMA>;
export type GetGoalParams = Static<typeof GET_GOAL_PARAMS_SCHEMA>;

export enum GoalType {
  DEFAULT = 'DEFAULT',
  FREE_KICK = 'FREE_KICK',
  PENALTY = 'PENALTY',
}

export interface Goal extends RowDataPacket {
  id: number;
  type: GoalType;
  timing: string;
  gameId: number;
  player: Player;
  assistant: Player | null;
  team: Team;
}
