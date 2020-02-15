<script>
  export let isFullPage = false;
</script>

<style>
  form {
    display: flex;
    width: 100%;
  }

  input {
    background: black;
    border-radius: 2px;
    color: #ccc;
    border: 0;
    margin-right: 10px;
    text-indent: 12px;
    width: 100%;
    padding: 8px 0;
    font-size: 1.2rem;
  }

  input::placeholder {
    font-style: italic;
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

  .landing input {
    text-align: center;
    text-indent: 0;
    font-size: 1.5rem;
  }

  .landing button {
    font-size: 1.4rem;
  }
</style>

<form class={isFullPage && 'landing'}>
  <input type="text" placeholder="Search for a song, artist or album" />
  <button type="submit">Search</button>
</form>
