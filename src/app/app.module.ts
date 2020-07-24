import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { TravelListComponent } from './travel-list/travel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    TravelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
