import Home from './pages/Home.svelte';
import Landing from './pages/Landing.svelte';

const routes = {
  '/': Landing,
  '/:term?': Home,
};

export default routes;
