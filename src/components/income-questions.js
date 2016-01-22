
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
				for (let j=0; j < questions.length; j++) {
					yield {
						resident: residents[i],
						question: questions[j]
					};
				}
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
			this.answeredYes = false;
			this.incrementQuestion();

		}, (error, x) => { debugger; console.log('validation failed')});
	}

	incrementQuestion(){
		let next = this.questions.next();
		if (next.done){
			this.element.dispatchEvent(this.doneEvent);
		} else {
			this.answeredYes = false;
			this.currentQuestion = next.value;
		}
	}
}