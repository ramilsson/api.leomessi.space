import { GetGamesQuery } from '../types';
import { getSQLByQuery } from 'utils';

export const getGamesSQL = (query?: GetGamesQuery): string => `
    SELECT
        game.id 'id',
        game.field 'field',
        game.round 'round',
        game.season 'season',
        game.status 'status',
        game.datetime 'datetime',
        json_object (
            'id', team.id,
            'name', team.name
        ) 'team',
        json_object (
            'id', opponent.id,
            'name', opponent.name
        ) 'opponent',
        json_object (
            'id', competition.id,
            'name', competition.name
        ) 'competition',
        json_object (
            'id', stadium.id,
            'name', stadium.name
        ) 'stadium',
        json_object (
            'fulltime', game.fulltime_result,
            'overtime', game.overtime_result,
            'penalty', game.penalty_result
        ) 'result'
    FROM game
    LEFT JOIN club AS team ON game.team_id = team.id
    LEFT JOIN club AS opponent ON game.opponent_id = opponent.id
    LEFT JOIN competition ON game.competition_id = competition.id
    LEFT JOIN stadium ON game.stadium_id = stadium.id
    ${getSQLByQuery('game', query)}
`;

export const getGameSQL = (id: number): string => `
    SELECT
        game.id 'id',
        game.field 'field',
        game.round 'round',
        game.season 'season',
        game.status 'status',
        game.datetime 'datetime',
        json_object (
            'id', team.id,
            'name', team.name
        ) 'team',
        json_object (
            'id', opponent.id,
            'name', opponent.name
        ) 'opponent',
        json_object (
            'id', competition.id,
            'name', competition.name
        ) 'competition',
        json_object (
            'id', stadium.id,
            'name', stadium.name
        ) 'stadium',
        json_object (
            'fulltime', game.fulltime_result,
            'overtime', game.overtime_result,
            'penalty', game.penalty_result
        ) 'result'
    FROM game
    LEFT JOIN club AS team ON game.team_id = team.id
    LEFT JOIN club AS opponent ON game.opponent_id = opponent.id
    LEFT JOIN competition ON game.competition_id = competition.id
    LEFT JOIN stadium ON game.stadium_id = stadium.id
    WHERE game.id = ${id}
    LIMIT 1
`;
