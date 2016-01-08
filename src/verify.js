import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {eatApplication} from './model/eatApplication'
import {Validation} from 'aurelia-validation';
import StepMixin from './mixins/step-mixin';
import Route from './route';

@inject(eatApplication, Validation, Router)
export class Verify extends StepMixin(Route) {
	constructor(eatApplication, validation, router) {
		super(eatApplication,router);
		console.log(eatApplication);
		this.application = eatApplication;
	}
}