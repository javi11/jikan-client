// Imports
import ow from 'ow';
import { URL } from 'url';

// Interfaces
import { Filters, Search, SearchTypes } from './interfaces/search/Search';

// Utils
import { searchApi, baseUrl, queue } from './utils';

/**
 * Search method
 *
 * @param query - The query you want to search
 * @param type - Specify where to search
 * @param page - The page number of the results
 * @param filters - The list of filters to add
 */
const search = async (query: string, type: SearchTypes, page: number = 1, filters?: Filters) => {
  ow(page, ow.number.positive);
  ow(query, ow.string.minLength(3));

  const url = new URL(`/search/${type}?q=${query}&page=${page}`, baseUrl);

  if (filters) {
    if (filters.end_date) {
      filters.end_date = new Date(filters.end_date).toISOString();
    }

    if (filters.genre) {
      ow(filters.genre, ow.number.lessThanOrEqual(44));
      ow(filters.genre, ow.number.greaterThanOrEqual(1));
    }

    if (filters.limit) {
      ow(filters.limit, ow.number.positive);
    }

    if (filters.score) {
      ow(filters.score, ow.number.positive);
    }

    if (filters.start_date) {
      filters.start_date = new Date(filters.start_date).toISOString();
    }

    Object.entries(filters).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const { body } = await queue.add(async () => await searchApi(url.href, {}));

  return body as Search;
};

export default {
  search
};
