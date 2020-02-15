<script>
  import Header from "components/Header";
  import Footer from "components/Footer";
</script>

<style>
  :root {
    --header-height: 80px;
    --footer-height: 60px;
  }

  .container {
    display: grid;
    grid-template-rows:
      var(--header-height) calc(
        100vh - var(--header-height) - var(--footer-height)
      )
      var(--footer-height);
  }
</style>

<div class="container">
  <header>
    <Header />
  </header>

  <main />

  <footer>
    <Footer />
  </footer>
</div>
