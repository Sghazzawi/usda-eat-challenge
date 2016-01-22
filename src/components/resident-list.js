import {bindable, inject} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';
import Resident from '../model/Resident'


@inject(Validation)
export class residentList {
	@bindable 
	displaylist;

	@bindable 
	addfunction;

	@bindable 
	removefunction;

	constructor(validation) {
		this.child = new Resident(validation);
		this.validation = validation;
	}

	submit() {
		this.addfunction(Object.assign({},this.child));
		this.child = new Resident(this.validation);
	    document.getElementById("fn2").focus();
	}

	remove(child){
		this.removefunction(child);
	}
}