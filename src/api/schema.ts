import { Type as T, Static as S, TSchema, TUnsafe } from '@sinclair/typebox';

export const TNullable = <H extends TSchema>(schema: H): TUnsafe<S<H, []> | null> => {
  return T.Unsafe<S<H> | null>({ ...schema, nullable: true });
};

export const TStringEnum = <V extends string[]>(values: [...V]): TUnsafe<V[number]> => {
  return T.Unsafe<V[number]>({ type: 'string', enum: values });
};

export const ListQuerySchemaProps = {
  page: T.Optional(T.Number()),
  limit: T.Optional(T.Number()),
  sort: T.Optional(T.String()),
  order: T.Optional(TStringEnum(['ASC', 'DESC'])),
};

export const ListQuerySchema = T.Object(ListQuerySchemaProps);
