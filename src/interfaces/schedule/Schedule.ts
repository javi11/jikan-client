export type Days =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'
  | 'other'
  | 'unknown';

export interface Schedule {
  readonly request_hash: string;
  readonly request_cached: boolean;
  readonly request_cache_expiry: number;
  readonly monday: Day[];
}

interface Day {
  readonly airing_start: Date;
  readonly episodes: number | null;
  readonly genres: Genre[];
  readonly image_url: string;
  readonly kids: boolean;
  readonly licensors: any[];
  readonly mal_id: number;
  readonly members: number;
  readonly producers: Genre[];
  readonly r18: boolean;
  readonly score: number | null;
  readonly source: string;
  readonly synopsis: string;
  readonly title: string;
  readonly type: MondayType;
  readonly url: string;
}

interface Genre {
  readonly mal_id: number;
  readonly name: string;
  readonly type: GenreType;
  readonly url: string;
}

enum GenreType {
  Anime = 'anime'
}

enum MondayType {
  Tv = 'TV'
}
