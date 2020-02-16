<script>
  import { onMount } from "svelte";
  import { getStreamUrl } from "helpers";
  export let id = null;

  let streamUrl = null;

  onMount(async () => {
    if (id) {
      streamUrl = await getStreamUrl(id);
    }
  });
</script>

{#if streamUrl}
  <audio controls>
    <source src={streamUrl} type="audio/mpeg" />
  </audio>
{/if}
