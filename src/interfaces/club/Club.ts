export interface Info {
  readonly anime_relations: Relation[];
  readonly category: string;
  readonly character_relations: Relation[];
  readonly created: Date;
  readonly image_url: string;
  readonly mal_id: number;
  readonly manga_relations: Relation[];
  readonly members_count: number;
  readonly pictures_count: number;
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
  readonly staff: Relation[];
  readonly title: string;
  readonly type: string;
  readonly url: string;
}

export interface Members {
  readonly members: Member[];
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
}

interface Member {
  readonly image_url: string;
  readonly url: string;
  readonly username: string;
}

interface Relation {
  readonly mal_id: number;
  readonly name: string;
  readonly type: Type;
  readonly url: string;
}

enum Type {
  Anime = "anime",
  Character = "character",
  Manga = "manga",
  Profile = "profile"
}
