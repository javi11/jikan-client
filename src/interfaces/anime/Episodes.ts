export interface Episodes {
  readonly episodes: Episode[];
  readonly episodes_last_page: number;
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
}

interface Episode {
  readonly aired: Date;
  readonly episode_id: number;
  readonly filler: boolean;
  readonly forum_url: string;
  readonly recap: boolean;
  readonly title: string;
  readonly title_japanese: string;
  readonly title_romanji: string;
  readonly video_url: string;
}
