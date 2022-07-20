import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
          this.router.navigate(['navbar'])
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

  clickRegister(){
    this.router.navigate(['register'])
  }
}
