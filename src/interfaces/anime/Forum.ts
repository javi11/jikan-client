export interface Forum {
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
  readonly topics: Topic[];
}

interface Topic {
  readonly author_name: string;
  readonly author_url: string;
  readonly date_posted: Date;
  readonly last_post: LastPost;
  readonly replies: number;
  readonly title: string;
  readonly topic_id: number;
  readonly url: string;
}

interface LastPost {
  readonly author_name: string;
  readonly author_url: string;
  readonly date_posted: Date;
  readonly url: string;
}
