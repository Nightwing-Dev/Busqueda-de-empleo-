import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatedVacancyComponent } from './create-offers/created-vacancy/created-vacancy.component';
import { LoginRecluiterComponent } from './login-recluiter/login-recluiter.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffersComponent } from './offers/offers.component';
import { RegisterRecluiterComponent } from './register-recluiter/register-recluiter.component';
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
  { path: 'video', component: VideoComponent },
  { path: 'login-recluiter', component: LoginRecluiterComponent },
  { path: 'register-recluiter', component: RegisterRecluiterComponent },
  { path: 'created-vacancy', component: CreatedVacancyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
