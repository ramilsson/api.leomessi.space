import { ListQuery } from './types';
import { DEFAULT_LIST_QUERY } from './const';

export const getSQLByQuery = (table: string, query?: ListQuery): string => {
  if (!query) return '';

  const {
    page = DEFAULT_LIST_QUERY.page,
    limit = DEFAULT_LIST_QUERY.limit,
    sort = DEFAULT_LIST_QUERY.sort,
    order = DEFAULT_LIST_QUERY.order,
    ...rest
  } = query;

  const filterSQL = Object.entries(rest).reduce((sql, [column, value]) => {
    const prefix = sql ? 'AND' : 'WHERE';
    return `${sql} ${prefix} ${table}.${column} = '${value}'`;
  }, '');

  const orderSQL = `ORDER BY ${table}.${sort} ${order}`;
  const limitSQL = `LIMIT ${limit}`;

  /**
   * @TODO fix this (need offset only if both 'page' and 'limit' exists in query)
   * */
  const offsetSQL = `OFFSET ${Number(limit) * Number(page) - Number(limit)}`;

  return `${filterSQL} ${orderSQL} ${limitSQL} ${offsetSQL}`;
};
