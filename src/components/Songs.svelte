<script>
  import Song from "components/Song";
  import Audio from "components/Audio";
  import { index, appState } from "stores";
  import {
    REPLACE_MORE_WEIRD_CHARACTERS,
    REPLACE_WEIRD_CHARACTERS,
    STOP_WORDS
  } from "helpers";

  const getResults = term => {
    // split terms, remove strange characters
    const searchTerms = term
      .toLowerCase()
      .replace(REPLACE_WEIRD_CHARACTERS, " ")
      .replace(REPLACE_MORE_WEIRD_CHARACTERS, "")
      .split(/ +/);

    let allIds = [];

    searchTerms.forEach(term => {
      if (STOP_WORDS.includes(term) || !words[term]) {
        return; // if its a stop word, skip looping
      }

      allIds.push(
        ...words[term].filter(id => {
          return !allIds.includes(id); //push id into array if its not there already
        })
      );
    });

    return allIds.map(id => {
      return { ...tracks[id], id }; // return all tracks in the id array, along with its id
    });
  };

  let { words, tracks } = {};

  index.subscribe(state => {
    ({ words, tracks } = state);
  });

  export let results = [];

  appState.subscribe(({ term }) => {
    results = getResults(term);
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
  {#each results as song (song.id)}
    <Song {song} />
  {/each}

  <Audio id="67260897-df82-3514-9e96-9f3ddee81883" />
</div>
