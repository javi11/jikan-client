export type Periods = 'today' | 'weekly' | 'monthly';

export type Types =
  | 'anime'
  | 'character'
  | 'manga'
  | 'person'
  | 'season'
  | 'schedule'
  | 'search'
  | 'top';

export interface Status {
  readonly cached_requests: number;
  readonly connected_clients: string;
  readonly requests_this_month: number;
  readonly requests_this_week: number;
  readonly requests_today: number;
  readonly total_connections_received: string;
}
