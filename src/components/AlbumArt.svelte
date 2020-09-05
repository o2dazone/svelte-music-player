<script>
  import { BLANK_IMG } from 'helpers';

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
  }

  .empty {
    opacity: 0.5;
  }
</style>

<img
  class={!art && 'empty'}
  src={art ? `data:image/jpeg;base64,${art}` : '0://'}
  alt="" />
