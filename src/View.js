/* Abstract class */
/* eslint-disable class-methods-use-this, no-unused-vars */
const EventDispatcher = require('./EventDispatcher')

class View extends EventDispatcher {
	constructor () {
		super()
		this._target = null
	}

	mount (target, initData) {
		this._target = target
		this.init(target)
		this.render(initData)
	}

	init (target) {
		// abstract
	}

	render (data) {
		// abstract
	}

	get model () {
		return this._model
	}
}

module.exports = View