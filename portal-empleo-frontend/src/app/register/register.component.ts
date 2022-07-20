import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private readonly router: Router,
    public userSvc: UserService,
    private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.initForm();
  }
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  login() {
    if (this.registerForm.valid) {
      this.userSvc.login(this.registerForm.value).subscribe(
        (res) => {
          console.log(this.registerForm.value)
          this.router.navigate(['navbar'])
        }, (err: Error) => {
          alert(err.message)
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
}
