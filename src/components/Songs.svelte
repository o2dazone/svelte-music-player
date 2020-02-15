<script>
  import Song from "components/Song";
</script>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 100%;

    &::-webkit-scrollbar {
      width: 1em;
    }

    &::-webkit-scrollbar-thumb {
      background-color: black;
    }
  }
</style>

<div class="container">
  <Song />
  <Song />
  <Song playing={true} />
  <Song />
  <Song />
  <Song />
  <Song />
  <Song />
  <Song />
</div>
