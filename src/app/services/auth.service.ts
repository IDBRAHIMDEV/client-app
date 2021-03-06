import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  infoUserAuthenticated = null;

  constructor(private afAuth: AngularFireAuth) { }

  createAccount(user: User) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
  }

  signIn(user: User) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  authenticatedUser() {
    return this.afAuth.user;
  }

  logOut() {
    return this.afAuth.auth.signOut();
  }

}
