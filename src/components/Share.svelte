<script>
  export let trackId;

  let copyInput;
  let copied = false;

  const copyShareLink = () => {
    copied = true;
    setTimeout(() => {
      copyInput.select();
      document.execCommand("copy");
    }, 100);
    setTimeout(() => {
      copied = false;
    }, 2000);
  };
</script>

<style lang="scss">
  .copyField {
    background: black;
    border-radius: 2px;
    color: #ccc;
    border: 0;
    margin-left: 10px;
    padding: 4px 0;

    &::placeholder {
      font-style: italic;
    }

    @media all and (max-width: 550px) {
      width: 50px;
    }
  }

  .share {
    border: 0;
    background: transparent;
    margin-left: 10px;
    min-width: 55px;
    color: #a5a5a5;
    font-style: italic;
  }
</style>

{#if trackId}
  {#if copied}
    <input
      type="text"
      class="copyField"
      bind:this={copyInput}
      value="{window.origin}/#/{trackId}" />
  {/if}
  <button type="button" on:click={copyShareLink} class="share">
    {copied ? 'Copied' : 'Share'}
  </button>
{/if}
