import { MySQLPromisePool } from 'fastify-mysql';
import { RowDataPacket } from 'mysql2';

export interface IGameRepository {
  mysql: MySQLPromisePool;

  getGames: () => Promise<IGameRow[]>;
  getGame: (id: number) => Promise<IGameRow>;
}

export interface IGameRow extends RowDataPacket {
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
  round: string;
  field: string;
  stadium: {
    id: number;
    name: string;
  };
  status: number;
  datetime: string;
  result: {
    fulltime: number[];
    overtime: number[];
    penalty: number[];
  };
}
