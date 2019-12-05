import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userAuthenticated = null;

  constructor(
              private flashMessage: FlashMessagesService,
              private authService: AuthService, 
              private router: Router) { }

  ngOnInit() {
    this.authService.authenticatedUser().subscribe(user => {
      this.userAuthenticated = user;
      console.log(user)
    });
  }

  logout() {
    this.authService.logOut()
        .then(() => {
          this.flashMessage
              .show('You are disconnect !', {
                cssClass: 'alert-info',
                timeout: 5000 
              })
          this.router.navigate(['/login']);
        })
        .catch()
  }

}
