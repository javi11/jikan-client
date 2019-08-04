// Imports
import ow from 'ow';

// Interfaces
import { Magazine } from './interfaces/magazine/Magazine';

// Utils
import { api, queue } from './utils';

/**
 * Fetches manga by the specified Magazine/Serializer/Publisher
 *
 * @param id - The magazine id
 */
const get = async (id: number, page: number = 1) => {
  ow(id, ow.number.positive);
  ow(page, ow.number.positive);

  const { body } = await queue.add(async () => await api(`/magazine/${id}/${page}`, {}));

  return body as Magazine;
};

export default {
  get
};
