import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {RoomsComponent} from "../rooms/rooms.component";


@Injectable({
  providedIn: 'root'
})
export class WmsClientService {


  constructor(private httpClient: HttpClient) { }


  public          getCurrency(): Observable<Root> {
    return this.httpClient.get<Root>("http://api.exchangeratesapi.io/v1/2013-03-16?access_key=e522751a0ff096b48362654a896a8059&symbols=USD,AUD,CAD,PLN,MXN&format=1&_gl=1*1aurgbi*_ga*MTU1OTA5OTM4LjE2ODc1MDEyNjM.*_ga_HGV43FGGVM*MTY4NzUwMTI2My4xLjEuMTY4NzUwMjk2NS40OC4wLjA.");

  }
  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://127.0.0.1:8080/getAllProducts");
  }

  public postProduct(name: string, weight: string, cost: string) {
    if(name != null && weight != null && cost != null)
      this.httpClient.post<Product>("http://127.0.0.1:8080/addProduct",
        {"name": name, "cost": weight, "weightInGrams": cost})
        .subscribe(data => {
        console.log(data)
      })
  }

  public poP(name: string, weight: string, cost: string) {
    if(name != null && weight != null && cost != null)
      return this.httpClient.post<Product>("http://127.0.0.1:8080/addProduct",
        {"name": name, "cost": weight, "weightInGrams": cost})
    return null;
  }
  public deleteProductById(id: number) {
    console.log("delate req - " + "http://127.0.0.1:8080/deleteItem?id="+id)
    this.httpClient.delete<Product>("http://127.0.0.1:8080/deleteItem?id="+id).subscribe()
  }
  refresh(): void {
    window.location.reload();
  }
}

export interface Root {
  success: boolean
  timestamp: number
  historical: boolean
  base: string
  date: string
  rates: Rates
}

export interface Rates {
  USD: number
  AUD: number
  CAD: number
  PLN: number
  MXN: number
}
export interface Product {
  productId: number
  name: string
  cost: number
  weightInGrams: number
  showEditTools: boolean
}
