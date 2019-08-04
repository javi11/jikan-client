export interface UserUpdates {
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
  readonly users: User[];
}

interface User {
  readonly chapters_read: number | null;
  readonly chapters_total: number | null;
  readonly date: Date;
  readonly image_url: string;
  readonly score: number | null;
  readonly status: Status;
  readonly url: string;
  readonly username: string;
  readonly volumes_read: number | null;
  readonly volumes_total: number | null;
}

enum Status {
  Completed = "Completed",
  OnHold = "On-Hold",
  PlanToRead = "Plan to Read",
  Reading = "Reading"
}
