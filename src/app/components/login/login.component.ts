import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });


  constructor(private router: Router, private authService: AuthService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  login() {
    this.authService.signIn(this.loginForm.value)
        .then((res) => {
           
          this.authService.authenticatedUser()
              .subscribe(user => {
                this.authService.infoUserAuthenticated = user
              });

          this.flashMessage.show('Welcome your are authenticated Successfully', 
          {
            cssClass: 'alert-success',
            timeout: 5000
          })
          
          this.router.navigate(['/'])
        })
        .catch((err) => this.flashMessage.show(err.message, 
        {
          cssClass: 'alert-danger',
          timeout: 10000
        }))
  }

}
