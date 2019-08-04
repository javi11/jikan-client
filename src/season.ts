// Imports
import ow from 'ow';

// Interfaces
import { Season, Seasons } from './interfaces/season/Season';
import { SeasonArchive } from './interfaces/season/SeasonArchive';
import { SeasonLater } from './interfaces/season/SeasonLater';

// Utils
import { api, queue } from './utils';

/**
 * Fetches anime of the specified season
 *
 * @param year - The wanted year
 * @param season - The wanted season
 */
const anime = async (year: number, season: Seasons) => {
  ow(year, ow.number.positive);

  const { body } = await queue.add(async () => api(`/season/${year}/${season}`, {}));

  return body as Season;
};

/**
 * Feteches all the years & their respective seasons that can be parsed from MyAnimeList
 */
const archive = async () => {
  const { body } = await queue.add(async () => api('/season/archive', {}));

  return body as SeasonArchive;
};

/**
 * Fetches anime that have been announced for the upcoming seasons
 */
const later = async () => {
  const { body } = await queue.add(async () => api('/season/later', {}));

  return body as SeasonLater;
};

export default {
  anime,
  archive,
  later
};
