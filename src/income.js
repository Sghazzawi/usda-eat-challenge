import Route from './route';
import {inject} from 'aurelia-framework';
import {eatApplication} from './model/eatApplication'
import {Router} from 'aurelia-router';
import StepMixin from './mixins/step-mixin';

@inject(eatApplication, Router)
export class Income extends StepMixin(Route) {
  constructor(eatApplication, router) {
  	super(eatApplication, router);
  	this.next = 'verify';
  	this.eatApplication.adults.forEach(function(adult){
  		adult.income = adult.income || [];
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
  this.questions = (function *(residents, questions){
      for (let i=0; i < residents.length; i++) {
        for (let j=0; j < questions.length; j++) {
          yield {
            resident: residents[i],
            question: questions[j]
          };
        }
      };
    })(this.eatApplication.adults, this.incomeTypes);
    this.incrementQuestion();
  }

  incrementQuestion(){
    let next = this.questions.next();
    if (next.done){
      this.continue();
    } else {
      this.currentQuestion = next.value;
    }
  }
}