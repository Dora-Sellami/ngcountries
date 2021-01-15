import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegionsComponent} from './regions/regions.component';
import {DetailComponent} from './detail/detail.component';
import {MapComponent} from './map/map.component';
import {ItemComponent} from './item/item.component';
import {PaysComponent} from './pays/pays.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {DetailPaysComponent} from './detail-pays/detail-pays.component';

const routes: Routes = [
  {path: 'map', component: MapComponent},
  {path: 'regions', component: RegionsComponent},
  {path: 'pays', component: PaysComponent},

  {path: 'pays/detail', component: DetailComponent},

  {path: 'pays/:name', component: DetailPaysComponent},
  {path: 'regions/:region', component: ItemComponent},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
