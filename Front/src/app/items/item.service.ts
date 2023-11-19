import { Injectable } from '@angular/core';
import {Product} from "../services/wms-client.service";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  products: Product[]

  constructor() {

  }

  show() {
    console.log("he123h")
    console.log(this.products)
    console.log("hehg")
    this.products = this.products.slice(0, 1)
    console.log(this.products)
    console.log("heh")
  }
   giveUpdate() {
    return this.products;
   }


}
