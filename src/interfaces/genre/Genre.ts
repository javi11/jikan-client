export interface Anime {
  readonly anime: AnimeElement[];
  readonly item_count: number;
  readonly mal_url: MalURL;
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
}

export interface Manga {
  readonly item_count: number;
  readonly mal_url: MalURL;
  readonly manga: MangaElement[];
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
}

interface AnimeElement {
  readonly airing_start: Date | null;
  readonly episodes: number | null;
  readonly genres: MalURL[];
  readonly image_url: string;
  readonly kids: boolean;
  readonly licensors: string[];
  readonly mal_id: number;
  readonly members: number;
  readonly producers: MalURL[];
  readonly r18: boolean;
  readonly score: number | null;
  readonly source: Source;
  readonly synopsis: string;
  readonly title: string;
  readonly type: AnimeType;
  readonly url: string;
}

interface MangaElement {
  readonly authors: MalURL[];
  readonly genres: MalURL[];
  readonly image_url: string;
  readonly mal_id: number;
  readonly members: number;
  readonly publishing_start: Date | null;
  readonly score: number;
  readonly serialization: string[];
  readonly synopsis: string;
  readonly title: string;
  readonly type: MangaType;
  readonly url: string;
  readonly volumes: number | null;
}

enum MangaType {
  Doujinshi = 'Doujinshi',
  Manga = 'Manga',
  Manhwa = 'Manhwa',
  Novel = 'Novel'
}

interface MalURL {
  readonly mal_id: number;
  readonly name: string;
  readonly type: MalURLType;
  readonly url: string;
}

enum MalURLType {
  Anime = 'anime'
}

enum Source {
  Empty = '-',
  Manga = 'Manga',
  Novel = 'Novel',
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
