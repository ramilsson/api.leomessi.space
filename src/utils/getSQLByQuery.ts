import { Query } from 'types';
import {
  DEFAULT_PAGE,
  DEFAULT_SORT,
  DEFAULT_LIMIT,
  DEFAULT_ORDER,
} from 'const';

export const getSQLByQuery = (table: string, query?: Query): string => {
  if (!query) return '';

  const {
    page = DEFAULT_PAGE,
    limit = DEFAULT_LIMIT,
    sort = DEFAULT_SORT,
    order = DEFAULT_ORDER,
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
