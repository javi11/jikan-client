export interface CharactersStaff {
  readonly characters: Character[];
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
  readonly staff: Staff[];
}

interface Character {
  readonly image_url: string;
  readonly mal_id: number;
  readonly name: string;
  readonly role: Role;
  readonly url: string;
  readonly voice_actors: Staff[];
}

enum Role {
  Main = "Main",
  Supporting = "Supporting"
}

interface Staff {
  readonly image_url: string;
  readonly language?: Language;
  readonly mal_id: number;
  readonly name: string;
  readonly url: string;
  readonly positions?: string[];
}

enum Language {
  English = "English",
  French = "French",
  German = "German",
  Hungarian = "Hungarian",
  Italian = "Italian",
  Japanese = "Japanese",
  Korean = "Korean",
  Spanish = "Spanish"
}
