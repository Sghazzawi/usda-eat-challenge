import Route from '../route';
import {inject} from 'aurelia-framework';
import {eatApplication} from '../model/eatApplication'
import {Router} from 'aurelia-router';
import StepMixin from '../mixins/step-mixin';

@inject(eatApplication, Router)
export class Foster extends StepMixin(Route) {
  constructor(eatApplication, router) {
  	super(eatApplication, router);
  	this.next = 'children/homeless';
  	this.eatApplication.children.forEach(function(child){
  		child.isFoster = !!child.isFoster;
  	});
  }

  continue() {
		if (this.eatApplication.children.every(child => child.isFoster)) {
			this.next="verify";
		}
		super.continue();
	}
}