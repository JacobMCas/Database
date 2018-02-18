import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;

  constructor(public authCtrl: AngularFireAuth, public toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoRegister(){
    this.navCtrl.push('RegisterPage');
  }

  presentToast(message: string) {
    this.toast.create({
      message: message,
      position: 'top',
      duration: 4000
    }).present();
  }

  login(user:User){
    this.authCtrl.auth.signInWithEmailAndPassword(user.email,user.password).then((success)=> {
      this.navCtrl.setRoot(HomePage);
    }).catch((err)=> {
      this.presentToast(err.message);
    });
  }
}
