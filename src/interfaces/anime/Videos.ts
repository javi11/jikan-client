export interface Videos {
  readonly episodes: Episode[];
  readonly promo: Promo[];
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
}

interface Episode {
  readonly episode: string;
  readonly image_url: string;
  readonly title: string;
  readonly url: string;
}

interface Promo {
  readonly image_url: string;
  readonly title: string;
  readonly video_url: string;
}
