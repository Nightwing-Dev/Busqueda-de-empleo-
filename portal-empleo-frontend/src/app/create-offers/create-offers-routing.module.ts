import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecluiterGuard } from '../guards/recluiter.guard';
import { NavbarRecluiterComponent } from '../navbar-recluiter/navbar-recluiter.component';
import { CreateOffersComponent } from './create-offers.component';
import { CreatedVacancyComponent } from './created-vacancy/created-vacancy.component';

const routes: Routes = [
  { path: '', component: CreateOffersComponent },
  { path: 'navbar-recluiter', component: NavbarRecluiterComponent, canActivate: [RecluiterGuard] },
  { path: 'created-vacancy', component: CreatedVacancyComponent, canActivate: [RecluiterGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateOffersRoutingModule { }
