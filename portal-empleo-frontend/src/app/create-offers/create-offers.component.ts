import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobsService } from '../services/jobs.service';


@Component({
  selector: 'app-create-offers',
  templateUrl: './create-offers.component.html',
  styleUrls: ['./create-offers.component.scss']
})
export class CreateOffersComponent implements OnInit {


  constructor(private readonly router: Router,
    public jobsSvc: JobsService,
    private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.vacancyForm = this.initForm();
  }

  vacancyForm = new FormGroup({

    title: new FormControl(''),
    descriptionCompany: new FormControl(''),
    salary: new FormControl(''),
    location: new FormControl(''),
    activity: new FormControl(''),
    workingDate: new FormControl(''),
    experience: new FormControl(''),
    createdAt: new FormControl(''),

  });


  registerOffer() {
    if (this.vacancyForm.valid) {
      this.jobsSvc.postJobs(this.vacancyForm.value).subscribe(
        (res) => {
          console.log(this.vacancyForm.value)
          this.router.navigate(['video'])
        }, (err: Error) => {
          alert(err.message)
        });
    }
  }

  initForm(): FormGroup {
    return this.fb.group({
      title: ['', [Validators.required]],
      descriptionCompany: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      location: ['', [Validators.required]],
      activity: ['', [Validators.required]],
      workingDate: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      createdAt: ['', [Validators.required]],
    })
  }
}




