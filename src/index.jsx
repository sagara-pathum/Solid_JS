/* @refresh reload */
import { render } from 'solid-js/web';
import 'solid-devtools';
import './index.css';

import { Router, Route } from "@solidjs/router";
import App from './App';
import Body from './section/Body';
import RouterPage from './page/RouterPage';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <Router root={App}>
    <Route path="/" component={Body} />
    <Route path="/router" component={RouterPage} />
  </Router>
), root);
