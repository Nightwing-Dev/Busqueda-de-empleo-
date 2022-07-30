import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOffersRoutingModule } from './create-offers-routing.module';
import { CreateOffersComponent } from './create-offers.component';
import { NavbarRecluiterComponent } from '../navbar-recluiter/navbar-recluiter.component';


@NgModule({
  declarations: [
    CreateOffersComponent,
    NavbarRecluiterComponent
  ],
  imports: [
    CommonModule,
    CreateOffersRoutingModule,
  ]
})
export class CreateOffersModule { }
