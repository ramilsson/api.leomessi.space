import { Static } from '@sinclair/typebox';
import { GET_LIST_QUERY_SCHEMA } from 'api/schema';

export enum OrderType {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type Query = Static<typeof GET_LIST_QUERY_SCHEMA>; // rename
