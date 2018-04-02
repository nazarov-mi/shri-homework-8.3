import fw from 'fw'
import View from './View'
import Model from './Model'

class Presenter extends fw.Presenter {
	constructor () {
		super(View)
		this._model = Model
	}

	init () {
		const view = this._view
		const model = this._model

		view.mount(document, Model.state)
		view.on('submit', (data) => model.changeData(data))
		model.on('message-added', (data) => view.renderMessages(model.state.messages))
	}
}

export default new Presenter()