import {inject} from 'aurelia-framework';
import {eatApplication} from './model/eatApplication'
import {Validation} from 'aurelia-validation';
import {Router} from 'aurelia-router';
import StepMixin from './mixins/step-mixin';
import Route from './route';
import AddressModel from './model/address'
import mapsapi from 'google-maps-api';

@inject(eatApplication, Validation, Router,  mapsapi)
export class Address extends StepMixin(Route) {

  constructor(eatApplication, validation, router, mapsApi) {
  	super(eatApplication,router)
    this.mapsapi = mapsapi;
    this.address = eatApplication.address ? 
                   Object.assign(new AddressModel(validation), eatApplication.address) : 
                   new AddressModel(validation);
    this.next="children";

  }

  attached(){
    var input = $('#str')[0];
    var address = this.address;

    this.mapsapi('AIzaSyBdr1fo0TB5H5mtdIE8LksheMYw5GTSVB0', ['places'])().then(function(maps){
      this.autocomplete = new google.maps.places.Autocomplete(input);
      this.autocomplete.addListener('place_changed', function() {
        let reducedAddress = this.autocomplete.getPlace().address_components.reduce(
          (prev, current) => {
            ["street_number", "route", "locality", "administrative_area_level_1", "postal_code"]
            .forEach(key => {
              if (current.types.includes(key)) 
                {prev[key] = current.short_name;
              }
            }); 
            return prev; }, {});
        this.address.street = `${reducedAddress.street_number} ${reducedAddress.route}`;
        this.address.city = reducedAddress.locality;
        this.address.state = reducedAddress.administrative_area_level_1;
        this.address.zipCode = reducedAddress.postal_code;
      }.bind(this));
    }.bind(this),(error, x) => {console.log('mapsapi failed')});
  }

  submitAddress() {
    this.address.validation.validate().then(() => {
      this.eatApplication.address = this.address;
      this.continue();

    }, (error, x) => {console.log('validation failed')});
  }
}