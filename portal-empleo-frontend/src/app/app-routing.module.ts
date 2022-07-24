import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffersComponent } from './offers/offers.component';
import { RegisterComponent } from './register/register.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'create-offers', loadChildren: () => import('./create-offers/create-offers.module').then(m => m.CreateOffersModule) },
  { path: 'video', component: VideoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
