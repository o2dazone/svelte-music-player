<script>
  import SearchBox from "components/SearchBox";
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

<main>
  <div class="container">
    <SearchBox isFullPage={true} />
  </div>
</main>
