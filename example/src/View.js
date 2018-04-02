import fw from 'fw'

const $ = (selector, target) => (target || document).querySelector(selector)

class View extends fw.View {
	constructor () {
		super()
	}

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

	render (data) {
		this.renderMessages(data.messages)
	}

	renderMessages (messages) {
		this._$label.innerHTML = `<p>${messages.join('</p><p>')}</p>`
	}
}

export default new View()