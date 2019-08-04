import ky, { Options } from 'ky';
import PMemoize from 'p-memoize';
import PQueue from 'p-queue';
import { getSettings } from './settings';

export const baseUrl = 'https://api.jikan.moe/v3';
export const queue = new PQueue({ concurrency: 2, interval: 4000 });

const http = ky.extend({
  prefixUrl: baseUrl
});

export const api: any = PMemoize(
  async (url: any, options: any) => await http(url, options).json(),
  {
    cache: getSettings().cache,
    maxAge: 86400000 // 1 day
  }
);

export const realTimeapi: any = PMemoize(
  async (url: any, options: any) => await http(url, options).json(),
  {
    cache: getSettings().cache,
    maxAge: 300000 // 5 minutes
  }
);

export const searchApi: any = PMemoize(
  async (url: any, options: any) => await http(url, options).json(),
  {
    cache: getSettings().cache,
    maxAge: 86400000 // 1 day
  }
);
