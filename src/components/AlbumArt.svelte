<script>
  export let art;
</script>

<style lang="scss">
  img,
  .empty {
    grid-area: art;
    width: 100%;
  }

  img {
    border-radius: 5px;
  }

  .empty {
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('../assets/disc.png');
    opacity: 0.7;
  }
</style>

{#if art}
  <img src="data:image/jpeg;base64,{art}" alt="" />
{:else}
  <div class="empty">&nbsp;</div>
{/if}
