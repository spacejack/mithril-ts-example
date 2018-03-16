// App entry point

import * as m from 'mithril';
import home from './components/home';
import about from './components/about';

// Set up routing by connecting components to routes
m.route(document.body, '/', {
  '/': home,
  '/about': about
});
