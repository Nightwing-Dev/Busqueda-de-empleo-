import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOffersRoutingModule } from './create-offers-routing.module';
import { CreateOffersComponent } from './create-offers.component';
import { NavbarRecluiterComponent } from '../navbar-recluiter/navbar-recluiter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatedVacancyComponent } from './created-vacancy/created-vacancy.component';


@NgModule({
  declarations: [
    CreateOffersComponent,
    NavbarRecluiterComponent,
    CreatedVacancyComponent
  ],
  imports: [
    CommonModule,
    CreateOffersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreateOffersModule { }
