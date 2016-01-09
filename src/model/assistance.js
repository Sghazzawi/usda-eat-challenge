export default class Assistance {
	constructor(validation, title){
		this.title = title;
		this.validation = validation
		.on(this)
		.ensure('title')
		.isNotEmpty()
		.ensure('accountNumber')
		.isNotEmpty()
	}
}