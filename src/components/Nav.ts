import m from 'mithril';

const Nav: m.Component = {
  view: () => m('div',
    m(m.route.Link, {href: '/'}, "Home"),
    m('span', " | "),
    m(m.route.Link, {href: '/about'}, "About")
  )
};

export default Nav;
