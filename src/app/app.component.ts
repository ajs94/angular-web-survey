import {Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppSurveyComponent {

  public isComplete = false;

  public submissionForm = this.formBuilder.group({
    email: '',
    name: '',
    accomplishment: '',
    superpower: '',
    faveDrink: '',
    faveSnacks: '',
    favePeople: '',
    shortGoals: '',
    longGoals: ''
  });
  
  constructor(
    // private appService: appService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit() {
    this.isComplete = true;
    // api call to store data would be here probably
  }

  onRetake() {
    this.isComplete = false;
  }
}