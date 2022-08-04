import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarRecluiterComponent } from '../navbar-recluiter/navbar-recluiter.component';
import { CreateOffersComponent } from './create-offers.component';
import { CreatedVacancyComponent } from './created-vacancy/created-vacancy.component';

const routes: Routes = [
  { path: '', component: CreateOffersComponent },
  { path: 'navbar-recluiter', component: NavbarRecluiterComponent },
  { path: 'created-vacancy', component: CreatedVacancyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateOffersRoutingModule { }
