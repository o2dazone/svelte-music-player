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

  const playSong = e => {
    console.log(e.currentTarget.dataset.trackId);
  };
</script>

<style lang="scss">
  %ellipsis {
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .song {
    display: grid;
    grid:
      "art title" auto
      "art meta" auto
      / 55px auto;
    margin-bottom: 12px;
    grid-column-gap: 10px;

    &:hover {
      cursor: pointer;

      b {
        color: #e1017a;
      }

      em {
        color: #d1d1d1;
      }
    }
  }

  img,
  .empty {
    width: 100%;
    height: 55px;
    grid-area: art;
  }

  b {
    @extend %ellipsis;
    grid-area: title;
    font-weight: normal;
    font-size: 1.4rem;
    color: #a5a5a5;
  }

  em {
    @extend %ellipsis;
    grid-area: meta;
    font-style: normal;
    font-size: 1rem;
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
  <div
    class="song"
    role="button"
    class:playing
    data-track-id={trackId}
    on:click={playSong}>
    {#if albumArtRef}
      <img src="{albumArtRef[0].url}=w70-c-h70-e100" alt="" />
    {:else}
      <div class="empty">&nbsp;</div>
    {/if}
    <b>{title}</b>
    <em>
      {artist}
      {#if album}&middot; {album}{/if}
      <span>{makeDurationFromMs(durationMillis)}</span>
    </em>
  </div>
{/if}
