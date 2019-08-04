export interface Result {
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
  readonly top: Top[];
}

interface Top {
  readonly end_date: null | string;
  readonly image_url: string;
  readonly mal_id: number;
  readonly members: number;
  readonly rank: number;
  readonly score: number;
  readonly start_date: null | string;
  readonly title: string;
  readonly type: Type;
  readonly url: string;
  readonly volumes: number | null;
}

enum Type {
  Doujinshi = "Doujinshi",
  Manga = "Manga",
  Novel = "Novel"
}

export type SubTypes =
  | "airing"
  | "bypopularity"
  | "doujin"
  | "favorite"
  | "manga"
  | "manhua"
  | "manhwa"
  | "movie"
  | "novels"
  | "oneshots"
  | "ova"
  | "special"
  | "tv"
  | "upcoming";

export type Types = "anime" | "manga" | "people" | "characters";
