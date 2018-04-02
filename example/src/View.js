import fw from 'fw'
import Model from './Model'
import $ from './$'

/**
 * Класс для работы с представлением,
 * наследует абстрактный класс fw.View
 * @class
 * @extends fw.View
 */
class View extends fw.View {

	/**
	 * Создаёт экземпляр View
	 * @constructs
	 */
	constructor () {
		super()
	}

	/**
	 * Запускает инициализацию представления
	 * @param {HTMLElement} target - родительский HTML элемент
	 */
	init (target) {
		this._$apply = $('.view-stub__apply', target)
		this._$input = $('.view-stub__input', target)
		this._$label = $('.view-stub__label', target)

		this._$apply.addEventListener('click', () => {
			const data = this._$input.value

			this.fire('submit', data)
			this._$input.value = ''
		})
	}

	/**
	 * Запускает отрисовку представления
	 * @param {Object} data - данные для отрисовки
	 */
	render (data) {
		this.renderMessages(data.messages)
	}

	/**
	 * Запускает отрисовку списка сообщений
	 * @param {Array.<String>} messages - список сообщений для отрисовки
	 */
	renderMessages (messages) {
		this._$label.innerHTML = `<p>${messages.join('</p><p>')}</p>`
	}
}

// Возвращаем новый экземпляр представления
export default new View()