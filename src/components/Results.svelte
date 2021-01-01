<script>
  import { onMount } from 'svelte';
  import Song from 'components/Song';
  import Autoplay from 'components/Autoplay';
  import { index, art, appState } from 'stores';
  import {
    REPLACE_MORE_WEIRD_CHARACTERS,
    REPLACE_WEIRD_CHARACTERS,
    ALBUM_ART_URL,
    TRACK_ID_RE
  } from 'helpers';

  let isShared = false;

  let artIndex = null;

  art.subscribe(state => {
    artIndex = state;
  });

  onMount(async () => {
    if (!artIndex) {
      let res = await fetch(ALBUM_ART_URL);
      res = await res.json();
      art.set(res);
    }
  });

  const getArt = id => {
    for (const [key, value] of Object.entries(artIndex)) {
      if (value.includes(id)) {
        return key;
      }
    }
  };

  const getResults = query => {
    if (query) {
      // if song is a track id, show only that song and display play button
      if (TRACK_ID_RE.test(query)) {
        isShared = true;
        return [{ ...tracks[query], id: query }];
      }

      const searchWords = query
        .toLowerCase()
        .replace(REPLACE_WEIRD_CHARACTERS, ' ')
        .replace(REPLACE_MORE_WEIRD_CHARACTERS, '')
        .split(/ +/);

      let ids;

      searchWords.forEach(searchWord => {
        ids = !ids
          ? words[searchWord] // single term
          : ids.filter(e => words[searchWord].includes(e)); // multiple term
      });

      // nothing matches, return empty object
      if (!ids) {
        return {};
      }

      return ids.map(id => {
        return { ...tracks[id], id }; // return all tracks in the id array, along with its id
      });
    }
  };

  let { words, tracks } = {};

  index.subscribe(state => {
    ({ words, tracks } = state);
  });

  let results;
  let trackId;

  appState.subscribe(({ term, trackId: id }) => {
    results = getResults(term);
    trackId = id;
  });
</script>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 100%;

    &::-webkit-scrollbar {
      width: 1em;
    }

    &::-webkit-scrollbar-thumb {
      background-color: black;
    }
  }
</style>

<div class="container">
  <Autoplay {results} {isShared} />
  {#each results as song (song.id)}
    <Song
      {song}
      art={!!artIndex && getArt(song.id)}
      playing={song.id === trackId} />
  {/each}
</div>
