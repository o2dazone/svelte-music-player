<script>
  export let playing = false;
  export let playSong;
  export let song = {};

  let {
    title = "Around the world",
    artist = "Daft Punk",
    album = "Homework EP",
    duration = "2:34"
  } = song;
</script>

<style>
  button {
    background: 0;
    border: 0;
  }

  button:hover {
    cursor: pointer;
  }

  .playing b {
    color: #009bfd;
  }

  .playing em {
    color: #d1d1d1;
  }

  b {
    font-weight: normal;
    font-size: 1.4rem;
    color: #a5a5a5;
  }

  em {
    font-style: normal;
    color: #828282;
  }
</style>

<button class={playing && 'playing'} type="button" on:click={playSong}>
  <b>{title}</b>
  <em>
    {artist}
    {#if album}: {album}{/if}
    {duration}
  </em>
</button>
