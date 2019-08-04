export interface Reviews {
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
  readonly reviews: Review[];
}

interface Review {
  readonly content: string;
  readonly date: Date;
  readonly helpful_count: number;
  readonly mal_id: number;
  readonly reviewer: Reviewer;
  readonly url: string;
}

interface Reviewer {
  readonly episodes_seen: number;
  readonly image_url: string;
  readonly scores: Scores;
  readonly url: string;
  readonly username: string;
}

interface Scores {
  readonly animation: number;
  readonly character: number;
  readonly enjoyment: number;
  readonly overall: number;
  readonly sound: number;
  readonly story: number;
}
