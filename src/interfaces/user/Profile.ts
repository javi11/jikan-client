export interface Profile {
  readonly about: string;
  readonly anime_stats: AnimeStats;
  readonly birthday: Date;
  readonly favorites: Favorites;
  readonly gender: string;
  readonly image_url: string;
  readonly joined: Date;
  readonly last_online: Date;
  readonly location: null;
  readonly manga_stats: MangaStats;
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
  readonly url: string;
  readonly username: string;
}

interface AnimeStats {
  readonly completed: number;
  readonly days_watched: number;
  readonly dropped: number;
  readonly episodes_watched: number;
  readonly mean_score: number;
  readonly on_hold: number;
  readonly plan_to_watch: number;
  readonly rewatched: number;
  readonly total_entries: number;
  readonly watching: number;
}

interface Favorites {
  readonly anime: Anime[];
  readonly characters: Anime[];
  readonly manga: any[];
  readonly people: Anime[];
}

interface Anime {
  readonly image_url: string;
  readonly mal_id: number;
  readonly name: string;
  readonly url: string;
}

interface MangaStats {
  readonly chapters_read: number;
  readonly completed: number;
  readonly days_read: number;
  readonly dropped: number;
  readonly mean_score: number;
  readonly on_hold: number;
  readonly plan_to_read: number;
  readonly reading: number;
  readonly reread: number;
  readonly total_entries: number;
  readonly volumes_read: number;
}
