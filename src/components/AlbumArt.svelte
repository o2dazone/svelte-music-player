<script>
  export let art;
  export let size = 70;
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
    background-image: url("../assets/disc.png");
    opacity: 0.7;
  }
</style>

{#if art}
  <img src="{art[0].url}=w{size}-c-h{size}-e100" alt="" />
{:else}
  <div class="empty">&nbsp;</div>
{/if}
