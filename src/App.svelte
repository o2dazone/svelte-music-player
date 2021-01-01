<script>
  import { onMount } from 'svelte';
  import Router from 'svelte-spa-router';
  import routes from './routes';
  import { index } from './stores';
  import { INDEX_URL } from './helpers';

  let songIndex = {};

  index.subscribe(v => {
    songIndex = v;
  });

  onMount(async () => {
    if (!songIndex) {
      let res = await fetch(INDEX_URL);
      res = await res.json();
      index.set(res);
    }
  });
</script>

<Router {routes} />
