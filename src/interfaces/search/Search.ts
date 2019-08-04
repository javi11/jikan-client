export interface Filters {
  end_date?: string;
  genre_exclude?: 0 | 1;
  genre?: number;
  limit?: number;
  rated?: Rated;
  score?: number;
  start_date?: string;
  status?: Status;
}

type Rated = 'g' | 'pg' | 'pg13' | 'r17' | 'r' | 'rx';

export interface Search {
  readonly request_hash: string;
  readonly request_cached: boolean;
  readonly request_cache_expiry: number;
  readonly results: Result[];
  readonly last_page: number;
}

export type SearchTypes =
  | 'anime'
  | 'character'
  | 'doujin'
  | 'manga'
  | 'manhua'
  | 'manhwa'
  | 'movie'
  | 'music'
  | 'novel'
  | 'ona'
  | 'oneshot'
  | 'ova'
  | 'person'
  | 'special'
  | 'tv';

type Status = 'airing' | 'completed' | 'complete' | 'tba' | 'upcoming';

interface Result {
  readonly airing: boolean;
  readonly end_date: Date | null;
  readonly episodes: number;
  readonly image_url: string;
  readonly mal_id: number;
  readonly members: number;
  readonly rated: Rated;
  readonly score: number;
  readonly start_date: Date;
  readonly synopsis: string;
  readonly title: string;
  readonly type: Type;
  readonly url: string;
}

enum Type {
  Movie = 'Movie',
  Ona = 'ONA',
  Ova = 'OVA',
  Special = 'Special',
  Tv = 'TV'
}
