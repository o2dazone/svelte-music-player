<script>
  import Song from "components/Song";
  import { index, appState } from "stores";
  import { getWords, intersection } from "helpers";

  let { term, words, tracks } = {};

  index.subscribe(state => {
    ({ words, tracks } = state);
  });

  appState.subscribe(state => {
    term = state.term;
  });

  const results = [];

  if (term) {
    const searchWords = getWords(term);
    let ids;
    searchWords.forEach(searchWord => {
      ids = !ids ? words[searchWord] : intersection(ids, words[searchWord]);
    });

    if (ids) {
      ids.forEach(id => {
        tracks[id].id = id;
        results.push(tracks[id]);
      });
    }
  }
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
  {#each results as song}
    <Song {song} />
  {/each}
</div>
