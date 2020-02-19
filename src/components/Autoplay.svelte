<script>
  import AlbumArt from "components/AlbumArt";
  import { appState } from "stores";

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
    // height: 200px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    box-sizing: border-box;
  }

  .close {
    align-self: flex-end;
    position: relative;
    border: 0;
    overflow: hidden;
    font-size: 0;
    height: 35px;
    width: 35px;
    background-color: #000;
    border-radius: 5px;

    &:after {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      content: "\274c"; /* use the hex value here... */
      font-size: 20px;
      color: #fff;
      line-height: 35px;
      text-align: center;
    }
  }

  .song {
    display: grid;
    grid:
      "art title" auto
      "art meta" auto
      / 85px auto;
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

  .play {
    background: #e1017a;
    border: 0;
    border-radius: 2px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    margin: 20px 0 5px;
    padding: 4px 10px;
    width: 200px;
    align-self: center;
  }
</style>

{#if results && isShared && isModalOpen}
  <div aria-modal="true" class="overlay">
    <div class="container">
      <button type="button" class="close" on:click={closeModal}>Close</button>
      <div class="song">
        <AlbumArt art={albumArtRef} size="150" />
        <h3>{title}</h3>
        <h4>
          {artist}
          {#if album}&middot; {album}{/if}
        </h4>
      </div>
      <button class="play" data-track-id={id} on:click={playSong}>Play</button>
    </div>
  </div>
{/if}
