<script>
  import Song from 'components/Song';
  import Autoplay from 'components/Autoplay';
  import { index, appState } from 'stores';
  import {
    REPLACE_MORE_WEIRD_CHARACTERS,
    REPLACE_WEIRD_CHARACTERS,
    STOP_WORDS,
    TRACK_ID_RE
  } from 'helpers';

  let isShared = false;

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
    <Song {song} playing={song.id === trackId} />
  {/each}
</div>
