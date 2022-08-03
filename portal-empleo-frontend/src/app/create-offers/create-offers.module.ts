import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOffersRoutingModule } from './create-offers-routing.module';
import { CreateOffersComponent } from './create-offers.component';
import { NavbarRecluiterComponent } from '../navbar-recluiter/navbar-recluiter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateOffersComponent,
    NavbarRecluiterComponent
  ],
  imports: [
    CommonModule,
    CreateOffersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreateOffersModule { }
