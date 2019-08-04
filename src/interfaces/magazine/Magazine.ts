export interface Magazine {
  readonly manga: Manga[];
  readonly meta: Meta;
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
}

interface Manga {
  readonly authors: Meta[];
  readonly genres: Meta[];
  readonly image_url: string;
  readonly mal_id: number;
  readonly members: number;
  readonly publishing_start: Date | null;
  readonly score: number | null;
  readonly serialization: string[];
  readonly synopsis: string;
  readonly title: string;
  readonly type: MangaType;
  readonly url: string;
  readonly volumes: number | null;
}

interface Meta {
  readonly mal_id: number;
  readonly name: string;
  readonly type: MetaType;
  readonly url: string;
}

enum MetaType {
  Manga = "manga",
  People = "people"
}

enum MangaType {
  Manga = "Manga",
  OneShot = "One-shot"
}
