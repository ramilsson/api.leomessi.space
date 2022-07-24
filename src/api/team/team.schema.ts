import { Type as T } from '@sinclair/typebox';

export const TeamSchema = T.Object({
  id: T.Number(),
  name: T.String(),
});
