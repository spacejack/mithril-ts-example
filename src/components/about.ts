import * as m from 'mithril'
import nav from './nav'

export default {
	view (vnode) {
		return m('.page', [
			m(nav),
			m('h1', "About"),
			m('p', "This is the about page.")
		])
	}
} as m.Component<{},{}>
