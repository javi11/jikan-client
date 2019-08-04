// Imports
import ow from 'ow';

// Interfaces
import { Anime, Manga } from './interfaces/genre/Genre';

// Utils
import { api, queue } from './utils';

/**
 * Fetches Anime items of the genre
 *
 * @param genreId - Genre ID from MyAnimeList
 * @param page - Number of the page
 */
const anime = async (genreId: number, page: number = 1) => {
  ow(genreId, ow.number.lessThanOrEqual(43));
  ow(genreId, ow.number.greaterThanOrEqual(1));

  const { body } = await queue.add(async () => await api(`/genre/anime/${genreId}/${page}`, {}));

  return body as Anime;
};

/**
 * Fetches Manga items of the genre
 *
 * @param genreId - Genre ID from MyAnimeList
 * @param page - Number of the page
 */
const manga = async (genreId: number, page: number = 1) => {
  ow(genreId, ow.number.lessThanOrEqual(43));
  ow(genreId, ow.number.greaterThanOrEqual(1));

  const { body } = await queue.add(async () => await api(`/genre/manga/${genreId}/${page}`, {}));

  return body as Manga;
};

export default {
  anime,
  manga
};
