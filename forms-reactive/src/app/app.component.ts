import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenNames = ['Chris', 'Anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.checkForbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.checkForbiddenEmails)
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });

    // Value Changes Observables
    this.signupForm.valueChanges.subscribe((value) => {
      console.log(value);
    });

    // Status Changes Observabales
    this.signupForm.statusChanges.subscribe((status) => {
      console.log(status);
    });

    // Set Value
    this.signupForm.setValue({
      'userData': {
        'username': 'Vaibhav',
        'email': 'Vaibhav@gmail.com'
      },
      'gender': 'male',
      'hobbies': []
    });

    // Patch Value
    this.signupForm.patchValue({
      'userData': {
        'username': 'Vaibhav228'
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  checkForbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenNames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }

  checkForbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject)  => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
