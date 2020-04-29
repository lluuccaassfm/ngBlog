import { Injectable } from '@angular/core';
import { UserI } from "../models/user.interface";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public useData: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.useData = afAuth.authState;
  }

  loginByEmail(user: UserI){
    const { email, password } = user;
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    this.afAuth.signOut();
  }
}
