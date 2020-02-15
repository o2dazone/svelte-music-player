<script>
  export let playing = false;
  export let song = {};

  let {
    title = "Around the world",
    artist = "Daft Punk",
    album = "Homework EP",
    duration = "2:34"
  } = song;

  const playSong = () => {
    console.log("playing...");
  };
</script>

<style lang="scss">
  %active {
    b {
      color: #009bfd;
    }

    em {
      color: #d1d1d1;
    }
  }

  button {
    text-align: left;
    background: 0;
    border: 0;
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;

    &:hover {
      cursor: pointer;
      @extend %active;
    }
  }

  b {
    font-weight: normal;
    font-size: 1.4rem;
    color: #a5a5a5;
  }

  em {
    font-style: normal;
    color: #828282;

    span {
      margin-left: 20px;
    }
  }

  .playing {
    @extend %active;
  }
</style>

<button class={playing && 'playing'} type="button" on:click={playSong}>
  <b>{title}</b>
  <em>
    {artist}
    {#if album}: {album}{/if}
    <span>{duration}</span>
  </em>
</button>
