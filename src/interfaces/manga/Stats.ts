export interface Stats {
  readonly completed: number;
  readonly dropped: number;
  readonly on_hold: number;
  readonly plan_to_read: number;
  readonly reading: number;
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
  readonly scores: { [key: string]: Score };
  readonly total: number;
}

interface Score {
  readonly percentage: number;
  readonly votes: number;
}
