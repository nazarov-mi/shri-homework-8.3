import fw from 'fw'
import View from './View'
import Model from './Model'
import sendToServer from './sendToServer'

/**
 * Класс для работы с представлением,
 * наследует абстрактный класс fw.Presenter
 * @class
 * @extends fw.Presenter
 */
class Presenter extends fw.Presenter {

	/**
	 * Создаёт экземпляр Presenter
	 * @constructs
	 */
	constructor () {
		super(View)
		this._model = Model
	}

	/**
	 * Запускает инициализацию
	 */
	init () {
		const view = this._view
		const model = this._model

		view.mount(document, model.state)
		view.on('submit', (data) => model.changeData(data))
		model.on('message-added', () => view.renderMessages(model.state.messages))
		model.on('data-changed', (data) => this._send(data))
	}

	/**
	 * Отправляет данные на сервер
	 * @param {String} data - данные для отправки
	 */
	async _send (data) {
		let message

		try {
			message = await sendToServer(data)
		} catch (e) {
			message = e.message
		}

		this._model.addMessage(message)
	}
}

// Возвращаем новый экземпляр Presenter'а
export default new Presenter()