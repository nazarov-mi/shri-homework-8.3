/* Abstract class */
/* eslint-disable class-methods-use-this, no-unused-vars */
const EventDispatcher = require('./EventDispatcher')
const AbstractClassError = require('./errors/AbstractClassError')
const AbstractMethodError = require('./errors/AbstractMethodError')

/**
 * Абстрактный класс для работы с представлением
 * и отображения данных, переданных моделью
 * @abstract
 * @class
 * @extends EventDispatcher
 */
class View extends EventDispatcher {

	/**
	 * Создаёт экземпляр View
	 * @constructs
	 */
	constructor () {
		super()

		if (this.constructor === View) {
			throw new AbstractClassError('View')
		}

		this._target = null
	}

	/**
	 * Устанавливает родительский HTML элемент,
	 * после чего запускает инициализацию и отрисовку представления
	 * @param  {HTMLElement} target - родительский HTML элемент
	 * @param  {Object} initData - данные первой отрисовки
	 * @return {View} Возвращает текущий экземпляр класса
	 */
	mount (target, initData) {
		this._target = target
		this.init(target)
		this.render(initData)

		return this
	}

	/**
	 * Запускает инициализацию представления
	 * @abstract
	 * @param {HTMLElement} target - родительский HTML элемент
	 */
	init (target) {
		throw new AbstractMethodError('View', 'init')
	}

	/**
	 * Запускает отрисовку представления
	 * @abstract
	 * @param {Object} data - данные для отрисовки
	 */
	render (data) {
		throw new AbstractMethodError('View', 'render')
	}
}

module.exports = View