export interface UserUpdates {
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
  readonly users: User[];
}

interface User {
  readonly date: Date;
  readonly episodes_seen: number | null;
  readonly episodes_total: number | null;
  readonly image_url: string;
  readonly score: number | null;
  readonly status: Status;
  readonly url: string;
  readonly username: string;
}

enum Status {
  Completed = 'Completed',
  Dropped = 'Dropped',
  OnHold = 'On-Hold',
  PlanToWatch = 'Plan to Watch',
  Watching = 'Watching'
}
