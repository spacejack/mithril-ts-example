import * as m from 'mithril'

export default {
	view (vnode) {
		return m('div',
			m('a', {href: '/', oncreate: m.route.link}, "Home"),
			m('span', " | "),
			m('a', {href: '/about', oncreate: m.route.link}, "About")
		)
	}
} as Mithril.Component<{},{}>
