<script>
  export let art;
  export let size = 70;
</script>

<style>
  img,
  .empty {
    grid-area: art;
    border-radius: 5px;
    width: 100%;
  }
</style>

{#if art}
  <img src="{art[0].url}=w{size}-c-h{size}-e100" alt="" />
{:else}
  <div class="empty">&nbsp;</div>
{/if}
