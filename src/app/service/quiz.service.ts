import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../classes/Quiz';
const API = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  questions!: Question[]

  submit(responds: any) {
    this.http.post(API + '/quizzes/', responds).subscribe(data => { console.log(data) }, err => console.log(err))
    console.log(responds)
  }

  question = []
  options = {
    headers: { "accept": "*/*" }
  }

  constructor(private http: HttpClient) { }

  public getAllQuestions(): Observable<any> {
    return this.http.get(API + '/questions/');
  }
}
