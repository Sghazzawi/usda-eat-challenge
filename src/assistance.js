import {inject} from 'aurelia-framework';
import {eatApplication} from './model/eatApplication'
import {Router} from 'aurelia-router';
import StepMixin from './mixins/step-mixin';
import Route from './route';

@inject(eatApplication, Router)
export class Children extends StepMixin(Route){
	constructor(eatApplication, router) {
		super(eatApplication,router);
		this.next="children/income";
		this.assistancePrograms = [{title:"SNAP"},{title:"TANF"},{title:"FDPIR"}];
	}

	continue() {
		if (this.assistancePrograms.some(program => program.isEnrolled)) {
			this.next="verify";
		}
		super.continue();
	}

	submit() {
		// this.eatApplication.addChild(Object.assign({},this.child));
		// this.child = {};
	 //    document.getElementById("fn").focus();
	}

}