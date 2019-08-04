// Imports
import ow from 'ow';

// Interfaces
import { Pictures } from './interfaces/character/Pictures';

// Utils
import { api, queue } from './utils';

/**
 * Fetches pictures related to the item
 *
 * @param id - The character id
 */
const pictures = async (id: number) => {
  ow(id, ow.number.positive);

  const { body } = await queue.add(async () => api(`/character/${id}/pictures`, {}));

  return body as Pictures;
};

export default {
  pictures
};
