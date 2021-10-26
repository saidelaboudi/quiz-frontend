import { Component } from "@angular/core";
import { Options } from "@angular-slider/ngx-slider";
import { QuizService } from "./service/quiz.service";
import { Question, Quiz, Response } from "./classes/Quiz";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  questions!: Question[];
  responses: Response[]=[];
  quiz!: Quiz[];
  len=1;
  text: String = "";
  constructor(private quizService: QuizService) {
    this.charge()
  }
  charge() {
    this.quizService.getAllQuestions().toPromise().then((data) => { 
      this.len = data.length
      console.log(this.len)
      for (let index = 0; index < this.len ; index++) {
        const element = data[index];
        this.responses.push( {
          'id': 563,
          'question': element,
          'choice': 0
        });
        this.text = this.responses[0].question.question
      }
    }).catch(err => console.log(err));
    // this.questions
    console.log(this.quizService.getAllQuestions())
    console.log(this.questions)
    console.log(this.responses)
  }


  form: any = {};
  i = 0;

  onSubmit() {
    this.responses[this.i].choice=this.value
    this.quizService.submit(new Quiz(-526,this.responses))

    console.log(this.responses)
  }
  onChange() {
    console.log(this.responses)
  }
  next() {
    this.responses[this.i].choice=this.value
    this.i++
    this.text = this.responses[this.i].question.question
    this.value = this.responses[this.i].choice
    this.responses[this.i].choice = this.value
    console.log("next")
    console.log(this.responses)
  }
  previous() {
    this.responses[this.i].choice=this.value
    this.i--
    this.text = this.responses[this.i].question.question
    this.value = this.responses[this.i].choice
    this.responses[this.i].choice = this.value
    console.log(this.responses)
    console.log("privious")
  }

  value: number = 0;
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 0, legend: "Very poor" },
      { value: 1, legend: "Very poor" },
      { value: 2 },
      { value: 3, legend: "Fair" },
      { value: 4 },
      { value: 5, legend: "Average" },
      { value: 6 },
      { value: 7, legend: "Good" },
      { value: 8 },
      { value: 9, legend: "Excellent" },
      { value: 10, legend: "Excellent" }
    ]
  };
}
