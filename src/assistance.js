import {inject} from 'aurelia-framework';
import {eatApplication} from './model/eatApplication'
import {Router} from 'aurelia-router';
import StepMixin from './mixins/step-mixin';
import Route from './route';
import AssistanceProgrom from './model/assistance'
import {Validation} from 'aurelia-validation';

@inject(eatApplication, Validation, Router)
export class Assitance extends StepMixin(Route){
	constructor(eatApplication, validation, router) {
		super(eatApplication,router);
		this.next="children/income";
	}

	continue() {
		Promise.all(this.eatApplication.assistancePrograms
			.filter(program => program.isEnrolled)
			.map(program => program.validation.validate()))
		.then(() => {
			if (this.eatApplication.assistancePrograms.some(program => program.isEnrolled)) {
				this.next="verify";
			}
			super.continue();
		},
		(reason) => {
			debugger;
		});
	}
    
	submit() {

	}

}