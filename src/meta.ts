// Imports
import ow from 'ow';

// Interfaces
import { Periods, Status, Types } from './interfaces/meta/Meta';

// Utils
import { realTimeapi, queue } from './utils';

/**
 * Requests related to meta information regarding the Jikan REST Instance
 *
 * @param type - The type you're searching for
 * @param period - The period you're searching for
 * @param offset - 1,000 requests are shown per page, you can use the offset to show more
 */
const requests = async (
  type: Types = 'anime',
  period: Periods = 'monthly',
  offset: number = 1000
) => {
  ow(offset, ow.number.positive);

  const { body } = await queue.add(async () =>
    realTimeapi(`/meta/requests/${type}/${period}/${offset}`, {})
  );

  return body;
};

/**
 * Fetches the status of the Jikan REST API
 */
const status = async () => {
  const { body } = await queue.add(async () => realTimeapi('/meta/status', {}));

  return body as Status;
};

export default {
  requests,
  status
};
