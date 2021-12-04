import { RowDataPacket } from 'mysql2';

export interface GoalsParams {
  gameId?: number;
  playerId?: number;
  assistantId?: number;
}

export enum GoalType {
  DEFAULT = 'DEFAULT',
  FREE_KICK = 'FREE_KICK',
  PENALTY = 'PENALTY',
}

export interface GoalRow extends RowDataPacket {
  id: number;
  player: {
    id: number;
    name: string;
  };
  assistant: {
    id: number;
    name: string;
  };
  gameId: number; // should I get all data of game? (learn HTTP API)
  team: {
    id: number;
    name: string;
  };
  type: GoalType;
  timing: string;
}
