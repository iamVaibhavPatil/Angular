import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';

    // Set the value - To set the whole form
    /*this.signUpForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    });*/

    // PatchValue to patch parts of the form
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
}

  /*onSubmit(form: NgForm) {
    console.log(form);
  }*/

  onSubmit() {
    console.log(this.signUpForm);
  }
}
