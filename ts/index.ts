import * as Lambda from 'aws-lambda';

import utilizationService from './service/utilizationService';

exports.handler = async (input: Lambda.ScheduledEvent, context: Lambda.Context) => {
  const functionNames = process.env.FUNCTION_NAMES.split(',');
  const durationMs = parseInt(process.env.DURATION || '60000', 10);
  await utilizationService.calculate(functionNames, durationMs, Date.parse(input.time));
  context.done();
};
