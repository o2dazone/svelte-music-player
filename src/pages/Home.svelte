<script>
  import { onMount } from "svelte";
  import Header from "components/Header";
  import Footer from "components/Footer";
  import Songs from "components/Songs";
  import { index } from "stores";
  import { INDEX_URL } from "helpers";

  export let params = {};

  let { term } = params;
  term = decodeURI(term);

  let songIndex = null;

  index.subscribe(v => {
    songIndex = v;
  });
</script>

<style>
  :root {
    --header-height: 43px;
    --footer-height: 30px;
    --container-padding: 12px;
    --grid-gap: 10px;
  }

  .container {
    grid-gap: 10px;
    padding: var(--container-padding);
    box-sizing: border-box;
    display: grid;
    grid-template-rows:
      var(--header-height) calc(
        100vh - var(--header-height) - var(--footer-height) -
          calc(2 * var(--container-padding)) - calc(2 * var(--grid-gap))
      )
      var(--footer-height);
  }
</style>

<div class="container">
  <header>
    <Header {term} />
  </header>

  <main>
    {#if songIndex}
      <Songs {term} index={songIndex} />
    {/if}
  </main>

  <footer>
    <Footer />
  </footer>
</div>
