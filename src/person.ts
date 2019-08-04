// Imports
import ow from 'ow';

// Interfaces
import { Pictures } from './interfaces/person/Pictures';

// Utils
import { api, queue } from './utils';

/**
 * Fetches pictures related to the item
 *
 * @param id - The person id
 */
const pictures = async (id: number) => {
  ow(id, ow.number.positive);

  const { body } = await queue.add(async () => api(`/person/${id}/pictures`, {}));

  return body as Pictures;
};

export default {
  pictures
};
