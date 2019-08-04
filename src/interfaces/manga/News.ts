export interface News {
  readonly articles: Article[];
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
}

interface Article {
  readonly author_name: string;
  readonly author_url: string;
  readonly comments: number;
  readonly date: Date;
  readonly forum_url: string;
  readonly image_url: null | string;
  readonly intro: string;
  readonly title: string;
  readonly url: string;
}
