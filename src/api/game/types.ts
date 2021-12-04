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

export interface GameRow extends RowDataPacket {
  id: number;
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
  season: string;
  round: string | null;
  field: GameField | null;
  stadium: {
    id: number;
    name: string;
  };
  status: GameStatus;
  datetime: string;
  result: {
    fulltime: string | null;
    overtime: string | null;
    penalty: string | null;
  };
}
