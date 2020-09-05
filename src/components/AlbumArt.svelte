<script>
  export let art;
</script>

<style lang="scss">
  img {
    grid-area: art;
    width: 100%;
    border-radius: 5px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('../assets/disc.png');

    &:not(.art) {
      opacity: 0.5;
    }
  }
</style>

<img class:art src={art ? `data:image/jpeg;base64,${art}` : '0://'} alt="" />
