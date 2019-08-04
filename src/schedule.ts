// Interfaces
import { Days, Schedule } from './interfaces/schedule/Schedule';

// Utils
import { api, queue } from './utils';

/**
 * Fetches anime schedule of the week or specified day
 */
const anime = async (day: Days = 'monday') => {
  const { body } = await queue.add(async () => await api(`/schedule/${day}`, {}));

  return body as Schedule;
};

export default {
  anime
};
