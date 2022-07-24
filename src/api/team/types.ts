import { Static as S } from '@sinclair/typebox';
import { TeamSchema } from './team.schema';

export type Team = S<typeof TeamSchema>;
