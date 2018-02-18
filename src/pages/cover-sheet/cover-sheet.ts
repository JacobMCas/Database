import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { cs } from '../../models/cs';

@IonicPage()
@Component({
  selector: 'page-cover-sheet',
  templateUrl: 'cover-sheet.html',
})
export class CoverSheetPage {
  cs = {} as cs;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

}
