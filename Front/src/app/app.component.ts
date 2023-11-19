import { Component } from '@angular/core';
import {getCurrencySymbol} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "triLowByte";
  title = 'AngularTut';

  public changeLogo(): void {
    const element = document.getElementById('bannerCenter');
    if(element != null) {
      if(element.style.backgroundColor == 'black') {
        element.style.backgroundColor = 'navajowhite';
        return;
      }
      element.style.backgroundColor = 'black';
    }
  }

  public addProduct(): void {
  }


  protected readonly getCurrencySymbol = getCurrencySymbol;
}
