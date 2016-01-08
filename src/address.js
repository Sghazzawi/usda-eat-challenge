import {inject} from 'aurelia-framework';
import {eatApplication} from './model/eatApplication'
import {Validation} from 'aurelia-validation';
import {Router} from 'aurelia-router';
import StepMixin from './mixins/step-mixin';
import Route from './route';
import AddressModel from './model/address'

@inject(eatApplication, Validation, Router)
export class Address extends StepMixin(Route) {

  constructor(eatApplication, validation, router) {
  	super(eatApplication,router)
    this.address = eatApplication.address ? 
                   Object.assign(new AddressModel(validation), eatApplication.address) : 
                   new AddressModel(validation);
    this.next="children";

  }

  submit() {
    this.address.validation.validate().then(() => {
      this.eatApplication.address = this.address;
      this.continue();

    }, (error, x) => { debugger; console.log('validation failed')});
  }
}