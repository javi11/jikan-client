// Imports
import ow from 'ow';

// Interfaces
import { Producer } from './interfaces/producer/Producer';

// Utils
import { api, queue } from './utils';

/**
 * Fetches anime by the specified Producer/Studio/Licensor
 *
 * @param id - The producer id
 */
const get = async (id: number, page: number = 1) => {
  ow(id, ow.number.positive);
  ow(page, ow.number.positive);

  const { body } = await queue.add(async () => await api(`/producer/${id}/${page}`, {}));

  return body as Producer;
};

export default {
  get
};
