import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { OffersComponent } from './offers/offers.component';
import { VideoComponent } from './video/video.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginRecluiterComponent } from './login-recluiter/login-recluiter.component';
import { RegisterRecluiterComponent } from './register-recluiter/register-recluiter.component';
import { FiltercityPipe } from './pipes/filtercity.pipe';
import { FilterYearsPipe } from './pipes/filter-years.pipe';
import { FilterSalaryPipe } from './pipes/filter-salary.pipe';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    OffersComponent,
    VideoComponent,
    FilterPipe,
    LoginRecluiterComponent,
    RegisterRecluiterComponent,
    FiltercityPipe,
    FilterYearsPipe,
    FilterSalaryPipe,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
