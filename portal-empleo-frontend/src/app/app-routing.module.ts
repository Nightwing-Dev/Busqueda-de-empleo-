import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { data } from 'jquery';
import { CreatedVacancyComponent } from './create-offers/created-vacancy/created-vacancy.component';
import { GuardGuard } from './guards/guard.guard';
import { RecluiterGuard } from './guards/recluiter.guard';
import { LoginRecluiterComponent } from './login-recluiter/login-recluiter.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffersComponent } from './offers/offers.component';
import { PostulationsComponent } from './postulations/postulations.component';
import { RegisterRecluiterComponent } from './register-recluiter/register-recluiter.component';
import { RegisterComponent } from './register/register.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'offers', component: OffersComponent, canActivate: [GuardGuard]},
  {
    path: 'create-offers', loadChildren: () => import('./create-offers/create-offers.module').then(m => m.CreateOffersModule),
    canActivate: [RecluiterGuard]
  },
  { path: 'video', component: VideoComponent, canActivate: [GuardGuard] },
  { path: 'login-recluiter', component: LoginRecluiterComponent },
  { path: 'register-recluiter', component: RegisterRecluiterComponent },
  { path: 'created-vacancy', component: CreatedVacancyComponent, canActivate: [RecluiterGuard] },
  { path: 'postulations', component: PostulationsComponent, canActivate: [GuardGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
