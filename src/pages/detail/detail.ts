import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  product:{Category: any, Data: any, Manufacturer: any, Product: any, Spec: any };
  pdf:string;
  constructor(public database: DatabaseProvider, public view:ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.product = {
      Category: this.navParams.get('Category'),
      Data: this.navParams.get('Data'),
      Manufacturer: this.navParams.get('Manufacturer'),
      Product: this.navParams.get('Product'),
      Spec: this.navParams.get('Spec')
    } 
  } 

  ionViewWillLoad(){
   // this.pdf = this.database.getPdf(this.product.Product);
  }

  close(){
    this.view.dismiss();
  }

  
}
