<script>
  import { makeDurationFromMs } from "helpers";
  export let playing = false;
  export let song = null;
  const {
    title,
    album,
    artist,
    durationMillis,
    id: trackId,
    albumArtRef
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
    margin-bottom: 12px;
    padding-left: 80px;
    box-sizing: border-box;
    background-size: 70px 70px;
    background-repeat: no-repeat;

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
    font-size: 0.8rem;
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

{#if song}
  <button
    class:playing
    type="button"
    on:click={playSong}
    style={albumArtRef ? `background-image:url('${albumArtRef[0].url}')` : ''}>
    <b>{title}</b>
    <em>
      {artist}
      {#if album}&middot; {album}{/if}
      <span>{makeDurationFromMs(durationMillis)}</span>
    </em>
  </button>
{/if}
