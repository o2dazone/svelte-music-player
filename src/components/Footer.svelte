<script>
  let playing = false;
</script>

<style lang="scss">
  :root {
    --control-size: 15px;
  }

  .container {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .duration {
    width: 100%;
    background: black;
    border-radius: 5px;
    overflow: hidden;
    align-self: stretch;
  }

  .tracking {
    width: 25%;
    height: 100%;
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

  span {
    color: #a5a5a5;
    font-size: 1.2rem;

    &:first-of-type {
      margin-right: 10px;
    }

    &:last-of-type {
      margin-left: 10px;
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
  <span>1:23</span>
  <div class="duration">
    <div class="tracking" />
  </div>
  <span>5:45</span>
</div>
