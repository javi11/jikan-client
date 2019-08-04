// Imports
import ow from 'ow';

// Interfaces
import { AnimeList, AnimeListTypes } from './interfaces/user/AnimeList';
import { Friends } from './interfaces/user/Friends';
import { History, Types } from './interfaces/user/History';
import { MangaList, MangaListTypes } from './interfaces/user/MangaList';
import { Profile } from './interfaces/user/Profile';

// Utils
import { realTimeapi, queue } from './utils';

/**
 * Fetches the specified user animelist
 *
 * @param username - Username on MyAnimeList
 * @param type - The type to search for
 * @param page - The page number
 */
const animeList = async (username: string, type: AnimeListTypes = 'all', page: number = 1) => {
  ow(page, ow.number.positive);

  const { body } = await queue.add(
    async () => await realTimeapi(`/user/${username}/animelist/${type}/${page}`, {})
  );

  return body as AnimeList;
};

/**
 * Fetches the specified user friends
 *
 * @param username - Username on MyAnimeList
 * @param page - The page number
 */
const friends = async (username: string, page: number = 1) => {
  ow(page, ow.number.positive);

  const { body } = await queue.add(
    async () => await realTimeapi(`/user/${username}/friends/${page}`, {})
  );

  return body as Friends;
};

/**
 * Fetches the specified user history
 *
 * @param username - Username on MyAnimeList
 * @param type - Anime, Manga or Both
 */
const history = async (username: string, type: Types = 'both') => {
  if (type === 'anime') {
    const anime = await queue.add(
      async () => await realTimeapi(`/user/${username}/history/anime`, {})
    );

    return anime.body as History;
  }

  if (type === 'both') {
    const both = await queue.add(async () => await realTimeapi(`/user/${username}/history`, {}));

    return both.body as History;
  }

  if (type === 'manga') {
    const manga = await queue.add(
      async () => await realTimeapi(`/user/${username}/history/manga`, {})
    );

    return manga.body as History;
  }
};

/**
 * Fetches the specified user mangalist
 *
 * @param username - Username on MyAnimeList
 * @param type - The type to search for
 * @param page - The page number
 */
const mangaList = async (username: string, type: MangaListTypes = 'all', page: number = 1) => {
  ow(page, ow.number.positive);

  const { body } = await queue.add(
    async () => await realTimeapi(`/user/${username}/mangalist/${type}/${page}`, {})
  );

  return body as MangaList;
};

/**
 * Fetches the specified user profile
 *
 * @param username - Username on MyAnimeList
 */
const profile = async (username: string) => {
  const { body } = await queue.add(async () => await realTimeapi(`/user/${username}`, {}));

  return body as Profile;
};

export default {
  animeList,
  friends,
  history,
  mangaList,
  profile
};
