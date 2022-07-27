import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-recluiter',
  templateUrl: './login-recluiter.component.html',
  styleUrls: ['./login-recluiter.component.scss']
})
export class LoginRecluiterComponent implements OnInit {

  constructor(private readonly router: Router,
    public auth: AuthService,
    private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.initForm();
  }
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  login() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (res) => {
          console.log(this.loginForm.value)
          this.router.navigate(['create-offers'])
        }, (err: Error) => {
          alert(err.message);
        }
      );
    }
  }

  initForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  clickRegister() {
    this.router.navigate(['register-recluiter'])
  }
  mostrarPass() {
    let x = (<HTMLInputElement>document.getElementById("inputContra"));
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password"
    }
  }
}