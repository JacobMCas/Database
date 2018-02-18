import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;
  constructor(public authCtrl: AngularFireAuth, public toast:ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  presentToast(message:string){
    this.toast.create({
      message: message,
      position: 'top',
      duration: 4000
    }).present();
  }

  register(user:User){
    this.authCtrl.auth.createUserWithEmailAndPassword(user.email,user.password);
    this.navCtrl.popToRoot();
  }

}
