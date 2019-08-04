// Imports
import ow from 'ow';

// Interfaces
import { Info, Members } from './interfaces/club/Club';

// Utils
import { api, queue } from './utils';

const info = async (id: number) => {
  ow(id, ow.number.positive);

  const { body } = await queue.add(async () => await api(`/club/${id}`, {}));

  return body as Info;
};

const members = async (id: number, page: number = 1) => {
  ow(page, ow.number.positive);
  ow(id, ow.number.positive);

  const { body } = await queue.add(async () => await api(`/club/${id}/members/${page}`, {}));

  return body as Members;
};

export default {
  info,
  members
};
