<script>
  import AlbumArt from "components/AlbumArt";

  export let closeModal;
  export let results = [];

  const { artist, album, title, albumArtRef } = results[0] || {};
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
    height: 200px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
  }

  button {
    align-self: flex-end;
    position: relative;
    border: 0;
    height: 50px;
    width: 50px;
    background-color: #000;
    border-radius: 5px;

    &:after {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      content: "\274c"; /* use the hex value here... */
      font-size: 25px;
      color: #fff;
      line-height: 50px;
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
    font-size: 2rem;
    color: #a5a5a5;
  }

  h4 {
    @extend %ellipsis;
    grid-area: meta;
    font-size: 1.6rem;
    color: #828282;
  }
</style>

{#if results}
  <div aria-modal="true" class="overlay">
    <div class="container">
      <button type="button" on:click={closeModal}>Close</button>
      <div class="song">
        <AlbumArt art={albumArtRef} size="150" />
        <h3>{title}</h3>
        <h4>
          {artist}
          {#if album}&middot; {album}{/if}
        </h4>
      </div>
    </div>
  </div>
{/if}
