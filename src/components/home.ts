import * as m from 'mithril'
import nav from './nav'

export default {
	view (vnode) {
		return m('.page', [
			m(nav),
			m('h1', "Home"),
			m('p', "This is the home page.")
		])
	}
} as m.Component<{},{}>
