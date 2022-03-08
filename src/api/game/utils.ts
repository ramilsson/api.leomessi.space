import { GameRowResult, GameResult } from './types';

export const normalizeGameResult = (result: GameRowResult): GameResult => {
  const fulltime = result.fulltime?.split('-').map((v) => Number(v)) || null;
  const overtime = result.overtime?.split('-').map((v) => Number(v)) || null;
  const penalty = result.penalty?.split('-').map((v) => Number(v)) || null;

  const totalHomeScore = fulltime ? fulltime[0] + (overtime?.[0] ?? 0) : null;
  const totalAwayScore = fulltime ? fulltime[1] + (overtime?.[1] ?? 0) : null;

  const total: GameResult['total'] =
    totalHomeScore !== null && totalAwayScore !== null ? [totalHomeScore, totalAwayScore] : null;

  return { fulltime, overtime, penalty, total };
};
