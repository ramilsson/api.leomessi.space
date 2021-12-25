import { Type } from '@sinclair/typebox';
import { DEFAULT_PAGE, DEFAULT_LIMIT, DEFAULT_SORT, DEFAULT_ORDER } from 'const';
import { OrderType } from 'types';

export const GET_LIST_QUERY = {
  page: Type.Optional(Type.Number({ default: DEFAULT_PAGE })),
  limit: Type.Optional(Type.Number({ default: DEFAULT_LIMIT })),
  sort: Type.Optional(Type.String({ default: DEFAULT_SORT })),
  order: Type.Optional(Type.Enum(OrderType, { default: DEFAULT_ORDER })),
};

export const GET_LIST_QUERY_SCHEMA = Type.Object(GET_LIST_QUERY);
