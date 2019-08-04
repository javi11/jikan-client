[![Known Vulnerabilities](https://snyk.io//test/github/javi11/mal-client/badge.svg?targetFile=package.json)](https://snyk.io//test/github/javi11/mal-client?targetFile=package.json)

> A wrapper for the jikan REST API for browsers inspired on https://github.com/Julien-Broyard/jikants

- API version v3.3

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)

## Install

```
$ npm install jikan-client
```

## Usage

```js
import * as Mal from 'mal-client';

/* ANIME */
await Mal.Anime.byId(1);
await Mal.Anime.charactersStaff(1);
await Mal.Anime.episodes(1);
await Mal.Anime.forum(1);
await Mal.Anime.moreInfo(1);
await Mal.Anime.news(1);
await Mal.Anime.pictures(1);
await Mal.Anime.recommendations(1);
await Mal.Anime.reviews(1);
await Mal.Anime.stats(1);
await Mal.Anime.userUpdates(1);
await Mal.Anime.videos(1);

/* CHARACTER */
await Mal.Character.pictures(1);

/* CLUB */
await Mal.Club.info(1);
await Mal.Club.members(1);

/* GENRE */
await Mal.Genre.anime(1);
await Mal.Genre.manga(1);

/* MAGAZINE */
await Mal.Magazine.get(1);

/* MANGA */
await Mal.Manga.characters(1);
await Mal.Manga.forum(1);
await Mal.Manga.moreInfo(1);
await Mal.Manga.news(1);
await Mal.Manga.pictures(1);
await Mal.Manga.recommendations(1);
await Mal.Manga.reviews(1);
await Mal.Manga.stats(1);
await Mal.Manga.userUpdates(1);

/* META */
await Mal.Meta.requests("anime", "today");
await Mal.Meta.status();

/* PERSON */
await Mal.Person.pictures(1);

/* PRODUCER */
await Mal.Producer.get(1);

/* SCHEDULE */
await Mal.Schedule.anime("sunday");

/* SEARCH */
await Mal.Search.search("Blue", "anime", 1, { limit: 1 });

/* SEASON */
await Mal.Season.anime(2018, "winter");
await Mal.Season.archive();
await Mal.Season.later();

/* TOP */
await Mal.Top.items("anime", 1, "airing");

/* USER */
await Mal.User.animeList("myusername", "all", 1);
await Mal.User.friends("myusername", 2);
await Mal.User.history("myusername", "both");
await Mal.User.mangaList("myusername", "all");
await Mal.User.profile("myusername");
```

## Errors

Errors are propagated as https://jikan.docs.apiary.io/#introduction/json-error-response response.

## Override cache

To override the cache just set new settings using:

```js
import { setSettings } from 'mal-client';
import myLRUCache from 'my-lru-cache';

setSettings({ cache: new myLRUCache() })
```