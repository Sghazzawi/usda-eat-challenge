export default class Resident {
	constructor(validation){
		this.validation = validation
		.on(this)
		.ensure('firstName')
		.isNotEmpty()
		.ensure('lastName')
		.isNotEmpty();
	}
}