export default class Resident {
	constructor(validation){
		this.income=[];
		this.validation = validation
		.on(this)
		.ensure('firstName')
		.isNotEmpty()
		.ensure('lastName')
		.isNotEmpty();
	}
}