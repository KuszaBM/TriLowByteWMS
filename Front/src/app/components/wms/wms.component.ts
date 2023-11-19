import {Component, OnInit} from '@angular/core';
import {Product, Root, WmsClientService} from "../../services/wms-client.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RoomsComponent} from "../../rooms/rooms.component";
import {ItemService} from "../../items/item.service";
@Component({
  selector: 'app-wms',
  templateUrl: './wms.component.html',
  styleUrls: ['./wms.component.css']
})
export class WmsComponent implements OnInit {

  name: string;
  massageU: string;
  root: Root;


  constructor(private wmsClientService: WmsClientService, private httpClient: HttpClient, private itemService: ItemService) {
    this.name = "TriLowByte"
  }
  ngOnInit() {
    this.wmsClientService.getCurrency().subscribe(value => {
      this.root = value
    });
  }

  postProduct(name: string, weight: string, cost: string) {
   // this.wmsClientService.postProduct(name, weight, cost)
    this.wmsClientService.poP(name, weight, cost)?.subscribe((value) =>
    {
      // this.itemService.itemList.push(value)
      console.log(value)
    })
    }
  // public postProduct(name: string, weight: string, cost: string) {
  //   if(name != null && weight != null && cost != null)
  //     this.httpClient.post<Product>("http://localhost:8080/addProduct",
  //       {"name": name, "cost": weight, "weightInGrams": cost})
  //       .subscribe(data => {
  //         console.log(data)
  //       })
  // }
}
