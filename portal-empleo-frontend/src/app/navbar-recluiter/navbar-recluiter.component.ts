import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-recluiter',
  templateUrl: './navbar-recluiter.component.html',
  styleUrls: ['./navbar-recluiter.component.scss']
})
export class NavbarRecluiterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}
   
  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['login-recluiter']);
  }
}
