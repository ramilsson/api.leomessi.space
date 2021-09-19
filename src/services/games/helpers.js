export const formatResult = (result) => {
  const fulltimeResult = result.fulltime.split('-').map((score) => +score);
  const overtimeResult =
    result.overtime && result.overtime.split('-').map((score) => +score);
  const penaltyResult =
    result.penalty && result.penalty.split('-').map((score) => +score);

  const teamResult = overtimeResult
    ? fulltimeResult[0] + overtimeResult[0]
    : fulltimeResult[0];
  const opponentResult = overtimeResult
    ? fulltimeResult[1] + overtimeResult[1]
    : fulltimeResult[1];

  const totalResult = [teamResult, opponentResult];

  return {
    fulltime: fulltimeResult,
    overtime: overtimeResult,
    penalty: penaltyResult,
    total: totalResult,
  };
};
