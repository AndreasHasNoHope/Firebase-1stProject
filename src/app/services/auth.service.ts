import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import { auth } from "firebase"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth
  ) {
    this.auth.authState.subscribe(data => {
      if(data) {
        const user = {
          uid: data.uid,
          name: data.displayName,
          email: data.email,
          photo: data.photoURL,
          provider: data.providerData[0].providerId
        };
        console.log("logged In", user)
      } else {
        console.log("logged Out")
      }
      });
}

  public async registerByEmailAndPassword(email: string, password: string){
    const credentials = await this.auth.auth.createUserWithEmailAndPassword(email, password);
    console.log(credentials);
  }
  public async loginByEmailAndPassword(email: string, password: string){
    const credentials = await this.auth.auth.signInWithEmailAndPassword(email, password);
    console.log("Users: ", credentials);
  }
  public async googlelogin() {
    const dataGoogle = await this.auth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    console.log("Google login: ", dataGoogle);
  }
  public async facebooklogin() {
    this.auth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }
  public async logOut(){
    await this.auth.auth.signOut()
  }
}
