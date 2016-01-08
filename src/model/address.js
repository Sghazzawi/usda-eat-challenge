const ZIP_CODE_LENGTH = 5;
const STATE_LENGTH = 2;
class Address {
	constructor(validation) {
		this.validation = validation
		.on(this)
		.ensure('street')
		.isNotEmpty()
		.ensure('city')
		.isNotEmpty()
		.ensure('state')
		.isNotEmpty()
		.hasLengthBetween(STATE_LENGTH,STATE_LENGTH)
		.containsOnlyAlpha()
		.ensure('zipCode')
		.isNotEmpty()
		.containsOnlyDigits()
		.hasLengthBetween(ZIP_CODE_LENGTH,ZIP_CODE_LENGTH);
	}

}

export default Address;