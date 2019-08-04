import LRU from 'quick-lru';
import mem = require('mem');

export interface Settings {
  cache: mem.CacheStorage<
    unknown,
    {
      data: unknown;
      maxAge: number;
    }
  >;
}

let settings: Settings = {
  cache: new LRU({ maxSize: 1000 })
};

export function getSettings() {
  return settings;
}

export function setSettings(input: Settings) {
  settings = input;
}
