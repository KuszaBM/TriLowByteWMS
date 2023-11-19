import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WmsComponent } from './components/wms/wms.component';
import { HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomsComponent } from './rooms/rooms.component';
import { InfoComponent } from './info/info.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    WmsComponent,
    RoomsComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
