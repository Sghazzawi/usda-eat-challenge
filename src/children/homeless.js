import Route from '../route';
import {inject} from 'aurelia-framework';
import {eatApplication} from '../model/eatApplication'
import {Router} from 'aurelia-router';
import StepMixin from '../mixins/step-mixin';

@inject(eatApplication, Router)
export class Homeless extends StepMixin(Route) {
  constructor(eatApplication, router) {
  	super(eatApplication, router);
  	this.next = 'assistance';
  	this.eatApplication.children.forEach(function(child){
  		child.isHomeless = !!child.isHomeless;
  	});
  }

  continue() {
		if (this.eatApplication.children.every(child => child.isFoster || child.isHomeless)) {
			this.next="verify";
		}
		super.continue();
	}
}