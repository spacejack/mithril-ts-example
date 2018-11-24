import m from 'mithril';
import Nav from './Nav';

const Home: m.Component = {
  view (vnode) {
    return m('.page', [
      m(Nav),
      m('h1', "Home"),
      m('p', "This is the home page.")
    ]);
  }
};

export default Home;
