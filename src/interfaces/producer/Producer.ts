export interface Producer {
  readonly anime: Anime[];
  readonly meta: Meta;
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
}

interface Anime {
  readonly airing_start: Date | null;
  readonly episodes: number | null;
  readonly genres: Meta[];
  readonly image_url: string;
  readonly kids: boolean;
  readonly licensors: string[];
  readonly mal_id: number;
  readonly members: number;
  readonly producers: Meta[];
  readonly r18: boolean;
  readonly score: number | null;
  readonly source: Source;
  readonly synopsis: string;
  readonly title: string;
  readonly type: AnimeType;
  readonly url: string;
}

interface Meta {
  readonly mal_id: number;
  readonly name: string;
  readonly type: MetaType;
  readonly url: string;
}

enum MetaType {
  Anime = 'anime'
}

enum Source {
  Empty = '-',
  Game = 'Game',
  LightNovel = 'Light novel',
  Manga = 'Manga',
  Novel = 'Novel',
  Original = 'Original',
  The4KomaManga = '4-koma manga',
  WebManga = 'Web manga'
}

enum AnimeType {
  Movie = 'Movie',
  Ona = 'ONA',
  Ova = 'OVA',
  Special = 'Special',
  Tv = 'TV'
}
