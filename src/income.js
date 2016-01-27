import Route from './route';
import {inject} from 'aurelia-framework';
import {eatApplication} from './model/eatApplication'
import {Router} from 'aurelia-router';
import StepMixin from './mixins/step-mixin';
import {Validation} from 'aurelia-validation';

@inject(eatApplication, Validation, Router)
export class Income extends StepMixin(Route) {
  constructor(eatApplication, validation, router) {
   	super(eatApplication, router);
  	this.next = 'verify';
    this.validation = validation;
  	this.eatApplication.adults.forEach(function(adult){
  		adult.income = adult.income || [];
  	});
  	this.incomeTypes = ['work',
  	                    'Social Security - Disability Benefits',
  	                    'Social Security - Survivor Benefits',
  	                    'Persons Outside the Household',
  	                    'Other'];
  }
}