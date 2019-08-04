import LRU from 'quick-lru';

export interface Settings {
  cache: any;
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
