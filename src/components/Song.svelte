<script>
  export let playing = false;
  let song = {};

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
  button {
    text-align: left;
    background: 0;
    border: 0;
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;

    &:hover {
      b {
        color: #e1017a;
      }

      em {
        color: #d1d1d1;
      }
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
    b {
      color: #009bfd;
    }

    em {
      color: #d1d1d1;
    }
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
