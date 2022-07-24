import { Static } from '@sinclair/typebox';
import { ListQuerySchema } from './schema';

export type ListQuery = Static<typeof ListQuerySchema>; // rename
