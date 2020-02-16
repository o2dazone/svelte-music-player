<script>
  import SearchBox from "components/SearchBox";
  import { index } from "stores";
  import { INDEX_URL } from "helpers";

  let songIndex = null;

  index.subscribe(v => {
    songIndex = v;
  });
</script>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  .container {
    display: flex;
    width: 600px;
    height: 70px;
  }
</style>

{#if songIndex}
  <main>
    <div class="container">
      <SearchBox isFullPage={true} />
    </div>
  </main>
{/if}
