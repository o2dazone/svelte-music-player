<script>
  import { onMount, onDestroy } from "svelte";
  import { getStreamUrl, makeDurationFromMs } from "helpers";
  import { appState } from "stores";

  let playing = false;
  let loaded = false;
  let audio = new Audio();
  let interval;
  let currentTime;
  let duration;
  let trackId;

  appState.subscribe(async state => {
    ({ trackId } = state);
    if (trackId) {
      resetAudio();
      makeAudio(await getStreamUrl(trackId));
    }
  });

  const resetAudio = () => {
    if (audio) {
      pausePlay();
      currentTime = 0;
    }
  };

  const makeAudio = url => {
    audio.src = url;
    audio.addEventListener("loadeddata", () => {
      loaded = true;
      currentTime = 0;
      duration = audio.duration;
      startPlay();
    });
  };

  const startAudioLoop = () => {
    interval = setInterval(() => {
      currentTime = audio.currentTime.toFixed(2);
    }, 350);
  };

  const killAudioLoop = () => {
    clearInterval(interval);
  };

  const startPlay = () => {
    audio.play();
    startAudioLoop();
    playing = true;
  };

  const pausePlay = () => {
    audio.pause();
    killAudioLoop();
    playing = false;
  };

  const togglePlayPause = () => {
    if (playing) {
      pausePlay();
    } else {
      startPlay();
    }
  };

  const onUpdateTime = time => {
    console.log(time);
  };
</script>

<style lang="scss">
  :root {
    --control-size: 15px;
  }

  .container {
    display: flex;
    align-items: center;
    height: 100%;
    background: #1b1b1b;
  }

  .duration {
    width: 100%;
    background: black;
    border-radius: 5px;
    overflow: hidden;
    align-self: stretch;
  }

  .tracking {
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
  {#if audio && loaded}
    <button class:playing type="button" on:click={togglePlayPause}>
      {playing ? 'pause' : 'play'}
    </button>

    <span>{makeDurationFromMs(currentTime * 1000)}</span>

    <div class="duration">
      <div
        class="tracking"
        style={`width:${((currentTime / duration) * 100).toFixed(1)}%`} />
    </div>

    <span>{makeDurationFromMs(duration * 1000)}</span>
  {/if}
</div>
