import fw from 'fw'
import sendToServer from './sendToServer'

class Model extends fw.Model {
	constructor (state) {
		super(state)
	}

	addMessage (text) {
		const messages = this.state.messages || []

		messages.push(text)

		this.changeState({
			messages
		})
		this.fire('message-added', text)
	}

	changeData (data) {
		this.changeState({
			data
		})
		this.fire('data-changed', data)

		this._send(data)
	}

	async _send (data) {
		try {
			const message = await sendToServer(data)
			this.addMessage(message)
		} catch (e) {
			this.addMessage(e.message)
		}
	}
}

export default new Model({
	messages: [],
	data: ''
})