export interface Friends {
  readonly request_hash: string;
  readonly request_cached: boolean;
  readonly request_cache_expiry: number;
  readonly friends: Friend[];
}

interface Friend {
  readonly friends_since: Date | null;
  readonly image_url: string;
  readonly last_online: Date;
  readonly url: string;
  readonly username: string;
}
