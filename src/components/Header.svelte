<script>
  import SearchBox from "components/SearchBox";
  export let term;
</script>

<style lang="scss">
  .container {
    max-width: 600px;
    display: flex;
  }

  h1 {
    text-transform: uppercase;
    font-size: 16px;
    margin-right: 10px;
    color: #d8fd35;

    span {
      color: #009bfd;
    }
  }
</style>

<div class="container">
  <h1>
    o2
    <span>music</span>
  </h1>
  <SearchBox {term} />
</div>
