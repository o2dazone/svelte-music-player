<script>
  import AlbumArt from 'components/AlbumArt';
  import { makeDurationFromMs } from 'helpers';
  import { appState } from 'stores';

  export let playing = false;
  export let song;

  const {
    title,
    album,
    artist,
    durationMillis,
    id: trackId,
    albumArtRef
  } = song;

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
  <AlbumArt art={albumArtRef} />
  <b>{title}</b>
  <em>
    {artist}
    {#if album && artist}&middot;{/if}
    {album}
    <span>{makeDurationFromMs(durationMillis)}</span>
  </em>
</div>
