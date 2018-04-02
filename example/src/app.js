import Presenter from './Presenter'
import Model from './Model'
import View from './View'
import $ from './$'

function initLog () {
	const $log = $('.log')

	// Функция логирования
	function log (data) {
		$log.innerHTML += data
	}

	// Логирование модели

	// Старое состояние
	let oldState = JSON.stringify(Model.state)

	Model.on('change', (state) => {
		const newState = JSON.stringify(state)
		const html = [
			'<p><b>В моделе изменились данные</b></p>',
			'<p>+ Старое состояние</p>',
			`<pre>${oldState}</pre>`,
			'<p>+ Новое состояние</p>',
			`<pre>${newState}</pre>`
		].join('')

		log(html)

		oldState = newState
	})

	// Логирование представления
	View.on('submit', (data) => {
		const html = [
			'<p><b>Представление сгенерировало событие<br>отправки формы</b></p>',
			'<p>+ Переданные данные</p>',
			`<pre>${data}</pre>`
		].join('')

		log(html)
	})
}

initLog()

// Инициализация Presenter'а
Presenter.init()