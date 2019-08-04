export type Seasons = 'summer' | 'spring' | 'fall' | 'winter';

export interface Season {
  readonly anime: Anime[];
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
  readonly season_name: string;
  readonly season_year: number;
}

interface Anime {
  readonly airing_start: Date | null;
  readonly continuing: boolean;
  readonly episodes: number | null;
  readonly genres: Genre[];
  readonly image_url: string;
  readonly kids: boolean;
  readonly licensors: string[];
  readonly mal_id: number;
  readonly members: number;
  readonly producers: Genre[];
  readonly r18: boolean;
  readonly score: number | null;
  readonly source: Source;
  readonly synopsis: string;
  readonly title: string;
  readonly type: AnimeType;
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

enum Source {
  CardGame = 'Card game',
  DigitalManga = 'Digital manga',
  Empty = '-',
  Game = 'Game',
  LightNovel = 'Light novel',
  Manga = 'Manga',
  Novel = 'Novel',
  Original = 'Original',
  Other = 'Other',
  PictureBook = 'Picture book',
  The4KomaManga = '4-koma manga',
  VisualNovel = 'Visual novel',
  WebManga = 'Web manga'
}

enum AnimeType {
  Movie = 'Movie',
  Ona = 'ONA',
  Ova = 'OVA',
  Special = 'Special',
  Tv = 'TV'
}
