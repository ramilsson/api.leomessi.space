import { Static as S } from '@sinclair/typebox';
import { PlayerSchema } from './player.schema';

export type Player = S<typeof PlayerSchema>;
