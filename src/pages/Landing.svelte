<script>
  import SearchBox from 'components/SearchBox';
  import { index } from 'stores';

  let songIndex;

  index.subscribe(state => {
    songIndex = state;
  });
</script>

<style>
  @keyframes pulse {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  p {
    animation: 1.5s pulse infinite;
    transition-property: opacity;
    font-size: 2rem;
    color: #e1017a;
    font-weight: bold;
    font-style: italic;
  }

  .container {
    display: flex;
    padding: 0 10px;
    max-width: 600px;
    height: 70px;
  }
</style>

{#if songIndex}
  <main>
    <div class="container">
      <SearchBox isFullPage={true} />
    </div>
  </main>
{:else}
  <main>
    <p>Loading index...</p>
  </main>
{/if}
