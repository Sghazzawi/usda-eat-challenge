import Route from '../route';
import {inject} from 'aurelia-framework';
import {eatApplication} from '../model/eatApplication'
import {Router} from 'aurelia-router';
import StepMixin from '../mixins/step-mixin';

@inject(eatApplication, Router)
export class Income extends StepMixin(Route) {
  constructor(eatApplication, router) {
  	super(eatApplication, router);
  	this.next = 'adults';
  	this.eatApplication.children.forEach(function(child){
  		child.income = child.income || [];
  	});
  	this.incomeTypes = [{title: 'work'},
  	                    {title: 'Social Security - Disability Benefits'},
  	                    {title: 'Social Security - Survivor Benefits'},
  	                    {title: 'Persons Outside the Household'},
  	                    {title: 'Other'}];
  }
}