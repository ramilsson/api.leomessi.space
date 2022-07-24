import { Type as T } from '@sinclair/typebox';

export const PlayerSchema = T.Object({
  id: T.Number(),
  name: T.String(),
});
