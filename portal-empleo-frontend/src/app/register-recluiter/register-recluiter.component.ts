import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRecluiter } from '../services/user-recluiter.service';


@Component({
  selector: 'app-register-recluiter',
  templateUrl: './register-recluiter.component.html',
  styleUrls: ['./register-recluiter.component.scss']
})
export class RegisterRecluiterComponent implements OnInit {

  constructor(private readonly router: Router,
    public recluiterSvc: UserRecluiter,
    private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.initForm();
  }
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  register() {
    if (this.registerForm.valid) {
      this.recluiterSvc.register(this.registerForm.value).subscribe(
        (res) => {
          console.log(this.registerForm.value)
          this.router.navigate(['login-recluiter'])
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
