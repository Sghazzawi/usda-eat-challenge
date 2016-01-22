import Route from '../route';
import {inject} from 'aurelia-framework';
import {eatApplication} from '../model/eatApplication'
import {Router} from 'aurelia-router';
import StepMixin from '../mixins/step-mixin';
import {Validation} from 'aurelia-validation';
import IncomeModel from '../model/income';

@inject(eatApplication, Validation, Router)
export class Income extends StepMixin(Route) {
  constructor(eatApplication, validation, router) {
  	super(eatApplication, router);
  	this.next = 'adults';
    var self = this;
    this.validation = validation;
    this.eatApplication.children.forEach(function(child){
      child.income = child.income || [];
    });
    this.incomeTypes = [{title: 'work',
    shouldDisplay: false,
    quesion: "work"},
    {title: 'Social Security - Disability Benefits',
    shouldDisplay: false},
    {title: 'Social Security - Survivor Benefits',
    shouldDisplay: false},
    {title: 'Persons Outside the Household',
    shouldDisplay: false},
    {title: 'Other',
    shouldDisplay: false}];
  }
}