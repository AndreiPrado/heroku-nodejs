import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodListComponent } from './food-list/food-list.component';
import { TravelListComponent } from './travel-list/travel-list.component';


const routes: Routes = [
    {path: 'food-list', component: FoodListComponent},
    {path: 'travel-list', component: TravelListComponent},
    {path: '', redirectTo: '/food-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
