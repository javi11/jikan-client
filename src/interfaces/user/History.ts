export interface History {
  readonly history: HistoryElement[];
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
}

export type Types = "anime" | "both" | "manga";

interface HistoryElement {
  readonly date: Date;
  readonly increment: number;
  readonly meta: Meta;
}

interface Meta {
  readonly mal_id: number;
  readonly name: string;
  readonly type: string;
  readonly url: string;
}
