import Route from '../route';
import {inject} from 'aurelia-framework';
import {eatApplication} from '../model/eatApplication'
import {Router} from 'aurelia-router';
import StepMixin from '../mixins/step-mixin';

@inject(eatApplication, Router)
export class Headstart extends StepMixin(Route) {
  constructor(eatApplication, router) {
  	super(eatApplication, router);
  	this.next = 'children/foster';
  	this.eatApplication.children.forEach(function(child){
  		child.isInHeadstart = !!child.isInHeadstart;
  	});
  }

 //  continue() {
	// 	if (this.eatApplication.children.every(child => child.isFoster || child.isHomeless)) {
	// 		this.next="verify";
	// 	}
	// 	super.continue();
	// }
}