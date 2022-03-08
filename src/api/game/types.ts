import { RowDataPacket } from 'mysql2';

export enum GameStatus {
  NOT_STARTED = 'NOT_STARTED',
  STARTED = 'STARTED',
  FINISHED = 'FINISHED',
  CANCELED = 'CANCELED',
}

export enum GameField {
  HOME = 'HOME',
  AWAY = 'AWAY',
}

export interface GameRowResult {
  fulltime: string | null;
  overtime: string | null;
  penalty: string | null;
}

export interface GameResult {
  fulltime: number[] | null;
  overtime: number[] | null;
  penalty: number[] | null;
  total: number[] | null;
}

export interface GameRow extends RowDataPacket {
  id: number;
  field: GameField | null;
  round: string | null;
  season: string;
  status: GameStatus;
  datetime: string;
  team: {
    id: number;
    name: string;
  };
  opponent: {
    id: number;
    name: string;
  };
  competition: {
    id: number;
    name: string;
  };
  stadium: {
    id: number;
    name: string;
  };
  result: GameRowResult;
}

export interface Game extends Omit<GameRow, 'result'> {
  result: GameResult;
}
