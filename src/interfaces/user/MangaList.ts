export type MangaListTypes =
  | 'all'
  | 'completed'
  | 'dropped'
  | 'onhold'
  | 'plantoread'
  | 'ptr'
  | 'reading';

export interface MangaList {
  readonly manga: Manga[];
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
}

interface Manga {
  readonly added_to_list: boolean;
  readonly days: number | null;
  readonly end_date: Date | null;
  readonly image_url: string;
  readonly is_rereading: boolean;
  readonly magazines: any[];
  readonly mal_id: number;
  readonly priority: Priority;
  readonly publishing_status: number;
  readonly read_chapters: number;
  readonly read_end_date: Date | null;
  readonly read_start_date: Date | null;
  readonly read_volumes: number;
  readonly reading_status: number;
  readonly retail: null;
  readonly score: number;
  readonly start_date: Date | null;
  readonly tags: null | any;
  readonly title: string;
  readonly total_chapters: number;
  readonly total_volumes: number;
  readonly type: Type;
  readonly url: string;
}

enum Priority {
  High = 'High',
  Low = 'Low',
  Medium = 'Medium'
}

enum Type {
  Doujinshi = 'Doujinshi',
  Manga = 'Manga',
  Manhua = 'Manhua',
  Manhwa = 'Manhwa',
  OneShot = 'One-shot'
}
