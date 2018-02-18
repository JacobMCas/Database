import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { FormControl } from '@angular/forms';
import { Product } from '../../models/product';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  searchTerm: string = '';
  category: string = '';
  manufacturer: string = '';
  products:any;
  searching:any = false;
  searchControl: FormControl;
  c_search: FormControl;
  m_search: FormControl;
  spec : number = 0;
  itemsInCart:number = 0;

  constructor(public database:DatabaseProvider, public navCtrl: NavController, public modalCtrl: ModalController) {
    this.searchControl = new FormControl();
    this.c_search = new FormControl();
    this.m_search = new FormControl();
  }

   showDetail(item){
    this.modalCtrl.create('DetailPage',item).present();
  }

  ionViewWillLoad(){
      this.products = this.database.l_of_items;
      
      this.searching = false;
      this.searchControl.valueChanges.subscribe(search => {
        this.database.filterItems(search);
      });
      this.c_search.valueChanges.subscribe(search => {
        this.filterCategories();
      });
      this.m_search.valueChanges.subscribe(search => {
        this.filterManufactures();
      });
    }

    search(){
      this.products = this.database.filterItems(this.searchTerm)
    }
 
    filterCategories(){
      this.products = this.database.filterCategories(this.category);
    }

    filterManufactures(){
      this.products = this.database.filterManufactures(this.manufacturer);
    }

    filterSpec(){
      this.products = this.database.filterSpec(this.spec.toString());
    }

    cart(){
      this.navCtrl.push('CartPage');
    }

    addToCart(item:any){
      this.itemsInCart+=1;
     this.database.cart.push(item);
    }
}
