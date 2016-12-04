// App entry point

import * as m from 'mithril'
import home from './components/home'
import about from './components/about'

m.route(document.body, '/', {
	'/': home,
	'/about': about
})
