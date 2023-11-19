import {Component, OnInit} from '@angular/core';
import {Product, WmsClientService} from "../services/wms-client.service";
import { Injectable } from '@angular/core';
import {waitForAsync} from "@angular/core/testing";
import {ItemService} from "../items/item.service";
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  numberOfItems = 10;

  hideItems = false;
  itemList: Product[];
  listButtonText: string;

  constructor(private wmsClientService: WmsClientService, private itemService: ItemService) {
  }
  ngOnInit(): void {
    this.getItemList();
    this.hideItems = true;
    this.listButtonText = "show items"
  }


  toggleItems() {
    if(this.hideItems) {
      this.getItemList();
      this.hideEditToolsForItems();
      this.hideItems = false
      this.listButtonText = "hide items"
    }
    else {
      this.hideItems = true
      this.listButtonText = "show items"
    }
    console.log("hjjjh")
  }
  getItemList() {
    this.wmsClientService.getProducts().subscribe(value => {
      this.itemList = value;
      this.itemService.products = value;
    });
  }
  async reloadItems() {
    this.itemService.products = this.itemList;
    this.itemService.show();
    this.itemList = this.itemService.products
    console.log("to")
    console.log(this.itemList)

      //this.toggleItems()
  }
  showEditToolsForItem(item: Product) {
    item.showEditTools = true;
    console.log(item.showEditTools)
  }

  getItems() {
    return this.itemList
  }
  hideEditToolsForItem(item: Product) {
    item.showEditTools = false;
    console.log(item.showEditTools)
  }
  hideEditToolsForItems() {
    for(const element of this.itemList) {
      element.showEditTools = false;
    }
  }
  removeItem(product: Product) {
    this.wmsClientService.deleteProductById(product.productId)
    const index = this.itemList.indexOf(product, 0)
    if (index > -1) {
      this.itemList.splice(index, 1)
    }
    //this.reloadItems()
    console.log(this.itemList)
  }
}
