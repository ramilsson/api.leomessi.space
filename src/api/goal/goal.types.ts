import { Static as S } from '@sinclair/typebox';
import { GoalParamsSchema, GoalListQuerySchema, GoalTypeSchema, GoalSchema } from './goal.schema';

export type GoalListQuery = S<typeof GoalListQuerySchema>;
export type GetGoalParams = S<typeof GoalParamsSchema>;

export type GoalType = S<typeof GoalTypeSchema>;
export type Goal = S<typeof GoalSchema>;
