<script>
  import AlbumArt from '@components/AlbumArt.svelte';
  import { makeDurationFromMs } from '../helpers';
  import { appState } from '../stores';

  export let playing = false;
  export let song;
  export let art;

  const { title, album, artist, duration, id: trackId } = song;

  const playSong = e => {
    appState.update(state => {
      return { ...state, trackId: e.currentTarget.dataset.trackId };
    });
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
      'art title' auto
      'art meta' auto
      / 55px auto;
    margin-bottom: 20px;
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

  b {
    @extend %ellipsis;
    grid-area: title;
    font-weight: normal;
    font-size: 1.4rem;
    color: #ccc;
  }

  em {
    @extend %ellipsis;
    grid-area: meta;
    font-style: normal;
    font-size: 1rem;
    color: #7a7a7a;

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

  @media all and (max-width: 550px) {
    .song {
      grid:
        'art title' auto
        'art meta' auto
        / 0px auto;
    }
  }
</style>

<div
  class="song"
  role="button"
  class:playing
  data-track-id={trackId}
  on:click={playSong}>
  <AlbumArt {art} />
  <b>{title}</b>
  <em>
    {artist}
    {#if album}&middot; {album}{/if}
    <span>{makeDurationFromMs(duration)}</span>
  </em>
</div>
