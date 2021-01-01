import Home from 'pages/Home';
import Landing from 'pages/Landing';

const routes = {
  '/': Landing,
  '/:term?': Home,
};

export default routes;
