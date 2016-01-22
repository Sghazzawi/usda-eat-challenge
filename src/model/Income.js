export default class Income {
	constructor(validation, options){
		if (options && options.amount) {
			this.amount = options.amount;
		}
		if (options && options.frequency) {
			this.frequency = options.frequency;
		}
		this.validation = validation
		.on(this)
		.ensure('frequency')
		.isNotEmpty()
		.ensure('amount')
		.isNotEmpty();
	}
}