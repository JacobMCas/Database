import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Product } from '../../models/product';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  cart:Array<Product>;
  constructor(public view: ViewController, public database: DatabaseProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.cart = this.database.cart;
  }

  export(){
    this.navCtrl.push('CoverSheetPage');
  }

 
}
