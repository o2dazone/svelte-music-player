<script>
  import { push } from 'svelte-spa-router';
  import { appState } from '../stores';

  export let isFullPage = false;

  let { term } = {};

  appState.subscribe(state => {
    ({ term } = state);
  });

  const onSearch = e => {
    e.preventDefault();

    const { searchBox } = e.currentTarget;
    searchBox.blur();

    const searchTerm = searchBox.value;

    if (searchTerm) {
      push(`/${encodeURIComponent(searchTerm)}`);
      appState.update(store => {
        return { ...store, term: searchTerm };
      });
    }
  };
</script>

<style lang="scss">
  form {
    display: flex;
    width: 100%;
  }

  input {
    background: rgba(0, 0, 0, 0.6);
    border-radius: 2px;
    color: #ccc;
    border: 0;
    margin-right: 10px;
    width: 100%;
    padding: 8px;
    font-size: 1.2rem;

    &::placeholder {
      font-style: italic;
    }
  }

  button {
    background: #e1017a;
    border: 0;
    border-radius: 2px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    padding: 4px 10px;
  }

  .isFullPage {
    input {
      @media all and (min-width: 550px) {
        text-align: center;
      }

      font-size: 1.5rem;
    }

    button {
      font-size: 1.4rem;
    }
  }
</style>

<form class:isFullPage on:submit={onSearch}>
  <input
    type="text"
    name="searchBox"
    placeholder="Search for a song, artist or album"
    value={term ? term : ''} />
  <button type="submit">Search</button>
</form>
