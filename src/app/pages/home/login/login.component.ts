import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  ngOnInit(): void {}

  constructor() {}

  activeTab: any = 'login';

  loginData = {
    username: '',
    password: '',
  };

  signupData = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  };

  isNotEmpty(obj: any) {
    for (let key in obj) {
      if (obj[key] === '') {
        return false;
      }
    }
    return true;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  logIn() {
    console.log('Logging in with', this.loginData);
    return false;
  }

  signUp() {
    console.log('Signing up with', this.signupData);
    return false;
  }
}
