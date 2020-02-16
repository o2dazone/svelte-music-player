<script>
  import { onMount, onDestroy } from "svelte";
  import { getStreamUrl, makeDurationFromMs } from "helpers";

  let playing = false;
  let loaded = false;
  let audio;
  let interval;
  let currentTime;
  let duration;

  onMount(async () => {
    const id = "67260897-df82-3514-9e96-9f3ddee81883";
    if (id) {
      makeAudio(await getStreamUrl(id));
    }
  });

  onDestroy(() => {
    killAudioLoop();
    audio.removeEventListener("loadeddata");
  });

  const makeAudio = url => {
    audio = new Audio(url);
    audio.addEventListener("loadeddata", () => {
      loaded = true;
      currentTime = 0;
      duration = audio.duration;
    });
  };

  const startAudioLoop = () => {
    interval = setInterval(() => {
      currentTime = audio.currentTime;
    }, 250);
  };

  const killAudioLoop = () => {
    clearInterval(interval);
  };

  const togglePlayPause = () => {
    if (playing) {
      audio.pause();
      killAudioLoop();
    } else {
      audio.play();
      startAudioLoop();
    }

    playing = !playing;
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
    <button class:playing type="button" on:click={togglePlayPause}>play</button>

    <span>{makeDurationFromMs(currentTime * 1000)}</span>

    <div class="duration">
      <div
        class="tracking"
        style={`width:${(currentTime / duration) * 100}%`} />
    </div>

    <span>{makeDurationFromMs(duration * 1000)}</span>
  {/if}
</div>
