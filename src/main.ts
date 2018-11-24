// App entry point

import m from 'mithril';
import Home from './components/Home';
import About from './components/About';

// Set up routing by connecting components to routes
m.route(document.body, '/', {
  '/': Home,
  '/about': About
});
