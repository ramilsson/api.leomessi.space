import { getSQLByQuery } from 'api/utils';
import { GoalListQuery } from '../goal.types';

export const getGoalsSQL = (query?: GoalListQuery): string => {
  return `
        SELECT
            goal.id 'id',
            goal.type 'type',
            goal.game_id 'game_id',
            goal.timing 'timing',
            JSON_OBJECT(
                'id', player.id,
                'name', player.name
            ) 'player',
            IF (
                assistant.id IS NOT NULL,
                JSON_OBJECT(
                    'id', assistant.id,
                    'name', assistant.name
                ),
                null
            ) 'assistant', 
            JSON_OBJECT(
                'id', team.id,
                'name', team.name
            ) 'team'
        FROM goal
        LEFT JOIN player AS player ON goal.player_id = player.id
        LEFT JOIN player AS assistant ON goal.assistant_id = assistant.id
        LEFT JOIN club AS team ON goal.team_id = team.id
        LEFT JOIN game ON goal.game_id = game.id
        ${getSQLByQuery('goal', query)}
    `;
};

export const getGoalSQL = (id: number): string => {
  return getGoalsSQL({ id: id, limit: 1 });
};
