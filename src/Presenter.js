/**
 * Класс для работы с представление
 * @abstract
 * @class
 */
class Presenter {

	/**
	 * Создаёт экземпляр Presenter
	 * @constructs
	 * @param {View} view - экземпляр представления
	 */
	constructor (view) {
		this._view = view
	}
}

module.exports = Presenter