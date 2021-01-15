import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegionsComponent } from './regions/regions.component';

import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';
import { MapComponent } from './map/map.component';
import { DetailPaysComponent } from './detail-pays/detail-pays.component';
import { PaysComponent } from './pays/pays.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    RegionsComponent,
    
    ItemComponent,
    DetailComponent,
    DetailPaysComponent,
    PaysComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
