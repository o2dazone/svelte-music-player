<script>
  import Header from "components/Header";
  import Footer from "components/Footer";
  import Songs from "components/Songs";
  import appState from "store";
  export let params = {};
</script>

<style>
  :root {
    --header-height: 43px;
    --footer-height: 23px;
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
    <Header {params} />
  </header>

  <main>
    <Songs />
  </main>

  <footer>
    <Footer />
  </footer>
</div>
