import { AuthService } from './../../services/auth.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {

    if(this.registerForm.invalid) {
      return false;
    }

    this.authService.createAccount(this.registerForm.value)
        .then((res) => console.log('success', res))
        .catch((err) => console.error('error', err))
  }

}
