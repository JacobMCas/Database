import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase  } from 'angularfire2/database';
import { Product } from '../../models/product';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatabaseProvider {
  items$: Observable<Product>;
  filterItems(searchTerm){
    this.db.list('/database', ref => ref.orderByChild('Product').equalTo(`${searchTerm}`));
    }
    
    filterCategories(term){
      this.db.list('/datbase/', ref=> ref.orderByChild('Category').equalTo(`${term}`));
    }
  

  filterManufactures(term){
    this.db.list('/database/', ref=> ref.orderByChild('Manufactures').equalTo(`${term}`));
  }

  filterSpec(spec){
    this.db.list('database', ref=> ref.orderByChild('Spec').equalTo(`${spec}`));
  }

    
    constructor(public db: AngularFireDatabase) {
      const l_of_items = this.db.list<Product>('database');
      this.items$
    }
}