<script>
  import AlbumArt from 'components/AlbumArt';
  import { appState } from 'stores';

  export let isShared;
  export let results = [];

  let isModalOpen = !!isShared;

  const { artist, album, title, id, albumArtRef } = results[0] || {};

  const closeModal = () => {
    isModalOpen = false;
  };

  const playSong = e => {
    closeModal();
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

  .overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
  }

  .container {
    background: #1b1b1b;
    width: 90vw;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    box-sizing: border-box;
  }

  .song {
    display: grid;
    grid:
      'art title' auto
      'art meta' auto
      / 105px auto;
    grid-column-gap: 10px;
  }

  h3 {
    @extend %ellipsis;
    grid-area: title;
    font-size: 1.8rem;
    color: #a5a5a5;
  }

  h4 {
    @extend %ellipsis;
    grid-area: meta;
    font-size: 1.5rem;
    color: #828282;
  }

  .actions {
    display: flex;
    justify-content: space-around;
  }

  button {
    border: 0;
    border-radius: 4px;
    font-size: 1.2rem;
    min-width: 150px;
    font-weight: bold;
    color: white;
    margin: 20px 0 5px;
    padding: 8px;
  }

  .play {
    background: #e1017a;
  }

  .close {
    background: #2b2b2b;
  }

  @media all and (max-width: 550px) {
    .song {
      display: flex;
      flex-direction: column;
    }
  }
</style>

{#if results && isShared && isModalOpen}
  <div aria-modal="true" class="overlay">
    <div class="container">
      <div class="song">
        <AlbumArt art={albumArtRef} size="550" />
        <h3>{title}</h3>
        <h4>
          {artist}
          {#if album && artist}&middot;{/if}
          {album}
        </h4>
      </div>
      <div class="actions">
        <button
          type="button"
          class="play"
          data-track-id={id}
          on:click={playSong}>
          Play
        </button>
        <button type="button" class="close" on:click={closeModal}>Close</button>
      </div>
    </div>
  </div>
{/if}
