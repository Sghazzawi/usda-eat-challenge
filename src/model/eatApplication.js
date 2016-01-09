import {inject} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';
import AddressModel from './address';
import ResidentModel from './resident';
import AssistanceProgramModel from './assistance';

const children = [];
const adults = [];
const assistance = [];

var address;
var _addResident;
var _removeResident;


@inject(Validation)
export class eatApplication {
	constructor(validation){
		this.validation = validation;
		_addResident = function (residentArray, resident) {
			residentArray.push(Object.assign(new ResidentModel(validation), resident));
		};
		_removeResident = function (residentArray, resident) {
			let index = residentArray.indexOf(resident);
			if (index > -1) {
				residentArray.splice(residentArray.indexOf(resident),1);
			}
		};
		[
			{title:"SNAP"},
			{title:"TANF"},
			{title:"FDPIR"}
		]
		.map(program => new AssistanceProgramModel(validation, program.title))
		.forEach(program => assistance.push(program));
	}

	get address() {
		return  address ? Object.assign(new AddressModel(validation), address) : address;
	}

	set address(addressIn){
		address = addressIn ? Object.assign(new AddressModel(this.validation), addressIn) : addressIn;
	}

	get children() {
		return children;
	}

	get adults() {
		return adults;
	}

	addChild(child) {
		_addResident(children, child);
	}

	removeChild(child) {
		_removeResident(children, child);
	}

	addAdult(adult) {
		_addResident(adults, adult);
	}

	removeAdult(adult) {
		_removeResident(adults, adult);
	}

	get assistancePrograms () {
		return assistance;
	}

}