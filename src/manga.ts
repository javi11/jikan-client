// Imports
import ow from 'ow';

// Interfaces
import { Characters } from './interfaces/manga/Characters';
import { Forum } from './interfaces/manga/Forum';
import { MoreInfo } from './interfaces/manga/MoreInfo';
import { News } from './interfaces/manga/News';
import { Pictures } from './interfaces/manga/Pictures';
import { Recommendations } from './interfaces/manga/Recommendations';
import { Reviews } from './interfaces/manga/Reviews';
import { Stats } from './interfaces/manga/Stats';
import { UserUpdates } from './interfaces/manga/UserUpdates';

// Utils
import { api, queue } from './utils';

/**
 * Fetches the list of characters & staff members of the manga
 *
 * @param id - The manga id
 */
const characters = async (id: number) => {
  ow(id, ow.number.positive);

  const { body } = await queue.add(async () => await api(`/manga/${id}/characters`, {}));

  return body as Characters;
};

/**
 * Fetches forum topics related to the item
 *
 * @param id - The manga id
 */
const forum = async (id: number) => {
  ow(id, ow.number.positive);

  const { body } = await queue.add(async () => await api(`/manga/${id}/forum`, {}));

  return body as Forum;
};

/**
 * Fetches more info related to the item
 *
 * @param id - The manga id
 */
const moreInfo = async (id: number) => {
  ow(id, ow.number.positive);

  const { body } = await queue.add(async () => await api(`/manga/${id}/moreinfo`, {}));

  return body as MoreInfo;
};

/**
 * Fetches news related to the item
 *
 * @param id - The manga id
 */
const news = async (id: number) => {
  ow(id, ow.number.positive);

  const { body } = await queue.add(async () => await api(`/manga/${id}/news`, {}));

  return body as News;
};

/**
 * Fetches pictures related to the item
 *
 * @param id - The manga id
 */
const pictures = async (id: number) => {
  ow(id, ow.number.positive);

  const { body } = await queue.add(async () => await api(`/manga/${id}/pictures`, {}));

  return body as Pictures;
};

/**
 * Fetches recommendations and their weightage made by users
 *
 * @param id - The manga id
 */
const recommendations = async (id: number) => {
  ow(id, ow.number.positive);

  const { body } = await queue.add(async () => await api(`/manga/${id}/recommendations`, {}));

  return body as Recommendations;
};

/**
 * Fetches reviews written by users
 *
 * @param id - The manga id
 * @param page - The page number
 */
const reviews = async (id: number, page: number = 1) => {
  ow(id, ow.number.positive);
  ow(page, ow.number.positive);

  const { body } = await queue.add(async () => await api(`/manga/${id}/reviews/${page}`, {}));

  return body as Reviews;
};

/**
 * Fetches statistical information related to the item
 *
 * @param id - The manga id
 */
const stats = async (id: number) => {
  ow(id, ow.number.positive);

  const { body } = await queue.add(async () => await api(`/manga/${id}/stats`, {}));

  return body as Stats;
};

/**
 * Fetches latest list updates made by users
 *
 * @param id - The manga id
 * @param page - The page number
 */
const userUpdates = async (id: number, page: number = 1) => {
  ow(id, ow.number.positive);
  ow(page, ow.number.positive);

  const { body } = await queue.add(async () => await api(`/manga/${id}/userupdates/${page}`, {}));

  return body as UserUpdates;
};

export default {
  characters,
  forum,
  moreInfo,
  news,
  pictures,
  recommendations,
  reviews,
  stats,
  userUpdates
};
