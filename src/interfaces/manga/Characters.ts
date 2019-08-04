export interface Characters {
  readonly characters: Character[];
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
}

interface Character {
  readonly image_url: string;
  readonly mal_id: number;
  readonly name: string;
  readonly role: Role;
  readonly url: string;
}

export enum Role {
  Main = 'Main',
  Supporting = 'Supporting'
}
