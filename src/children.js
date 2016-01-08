import {inject} from 'aurelia-framework';
import {eatApplication} from './model/eatApplication'
import {Router} from 'aurelia-router';
import StepMixin from './mixins/step-mixin';
import Route from './route';
import Resident from './model/Resident'
import {Validation} from 'aurelia-validation';

@inject(eatApplication, Validation, Router)
export class Children extends StepMixin(Route){
	constructor(eatApplication, validation, router) {
		super(eatApplication,router);
		this.next="children/enrollment";
		this.child = new Resident(validation);
		this.validation = validation;
	}

	submit() {
		this.eatApplication.addChild(Object.assign({},this.child));
		this.child = new Resident(this.validation);
	    document.getElementById("fn").focus();
	}

	remove(child){
		this.eatApplication.removeChild(child);
	}

}