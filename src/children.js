import {inject} from 'aurelia-framework';
import {eatApplication} from './model/eatApplication'
import {Router} from 'aurelia-router';
import StepMixin from './mixins/step-mixin';
import Route from './route';

@inject(eatApplication, Router)
export class Children extends StepMixin(Route){
	constructor(eatApplication, router) {
		super(eatApplication,router);
		this.next="children/enrollment";
	}
}