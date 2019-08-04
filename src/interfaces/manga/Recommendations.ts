export interface Recommendations {
  readonly recommendations: Recommendation[];
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
}

interface Recommendation {
  readonly image_url: string;
  readonly mal_id: number;
  readonly recommendation_count: number;
  readonly recommendation_url: string;
  readonly title: string;
  readonly url: string;
}
