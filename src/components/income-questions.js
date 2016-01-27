
import {bindable, inject, customElement} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';
import IncomeModel from '../model/income';

@customElement('income-questions')
@inject(Validation, Element)
export class incomeQuestions {
	@bindable
	residents;

	@bindable
	incometypes;

	@bindable
	continue;

	frequencies = ["every week","every other week","twice a month","every month"];
	completedResidents = [];

	constructor(validation, element){
		this.validation = validation;
		this.element = element;
        this.doneEvent = new CustomEvent('done', {
                        bubbles: true
                    });
	}

	bind(a, b) {
		this.doneEvent = new CustomEvent('done', {
	            bubbles: true
	        });
	    this.questions = (function *(residents, questions) {
			for (let i=0; i < residents.length; i++) {
				yield {
					resident: residents[i],
					questions: questions
				};
			};
		})(this.residents, this.incometypes);
		this.incrementQuestion();
		this.answeredYes = false;
	}

	answerYes() {
		this.answeredYes = true;
	}

	cancel() {
		this.answeredYes = false;
	}

	submit(){
		var newIncome = new IncomeModel(this.validation, {amount: this.incomeAmount,
			frequency: this.selectedFrequency});

		newIncome.validation.validate().then(() => {
			this.currentQuestion.resident.income.push(newIncome);
			this.incomeAmount = 0;
			this.selectedFrequency = "every week";
			this.answeredYes = false;

		}, (error, x) => { debugger; console.log('validation failed')});
	}

	removeIncome(income) {
		let incomeArray = this.currentQuestion.resident.income;
		incomeArray.splice(incomeArray.indexOf(income),1);
	}

	incrementQuestion(){
		let next = this.questions.next();
		if (next.done){
			this.element.dispatchEvent(this.doneEvent);
		} else {
			this.answeredYes = false;
			this.completedResidents.push(this.currentQuestion);
			this.currentQuestion = next.value;
		}
	}
}