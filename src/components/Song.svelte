<script>
  export let playing = false;
</script>

<style>
  .playing {
    color: #009bfd;
  }
</style>

<button class={playing && 'playing'} type="button">Song</button>
