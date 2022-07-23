import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOffersComponent } from './create-offers.component';

const routes: Routes = [{ path: '', component: CreateOffersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateOffersRoutingModule { }
