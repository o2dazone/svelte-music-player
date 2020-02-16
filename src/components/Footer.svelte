<script>
  let playing = false;
</script>

<style lang="scss">
  :root {
    --control-size: 12px;
  }

  .container {
    display: flex;
    align-items: stretch;
  }

  .duration {
    width: 100%;
    background: black;
    border-radius: 2px;
  }

  .tracking {
    width: 25%;
    background: #e1017a;
  }

  button {
    background: transparent;
    margin-right: 10px;
    text-indent: -9999em;
    overflow: hidden;
    width: 0;
    height: 0;
    border: 0;
    border-top: var(--control-size) solid transparent;
    border-bottom: var(--control-size) solid transparent;
    border-left: var(--control-size) solid #828282;

    &:hover {
      border-left-color: #d8fd35;
    }
  }

  .playing {
    border-left-color: #d8fd35;

    &:hover {
      border-left-color: #e1017a;
    }
  }
</style>

<div class="container">
  <button class:playing type="button">play</button>
  <div class="duration">
    <div class="tracking">&nbsp;</div>
  </div>
</div>
