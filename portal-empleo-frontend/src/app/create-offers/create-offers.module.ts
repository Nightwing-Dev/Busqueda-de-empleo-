import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOffersRoutingModule } from './create-offers-routing.module';
import { CreateOffersComponent } from './create-offers.component';


@NgModule({
  declarations: [
    CreateOffersComponent
  ],
  imports: [
    CommonModule,
    CreateOffersRoutingModule
  ]
})
export class CreateOffersModule { }
