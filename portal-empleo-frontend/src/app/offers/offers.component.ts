import { Component, OnInit } from '@angular/core';
import { Jobs } from '../interfaces/jobs.interface';
import { JobsService } from '../services/jobs.service';



@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  
  pages: number = 1;
  job!: Jobs[];

  constructor(private jobsSvc: JobsService) { }

  ngOnInit(): void {
    this.gettingJobs();
  }
  gettingJobs() {
    this.jobsSvc.getJobs().subscribe({
      next: (res) => {
        console.log(res);
        this.job = res.map(({
          title,
          descriptionCompany,
          salary,
          location,
          companyImage,
          workingDate,
          experience,
          createdAt }: Jobs) => {
          return {
            title: title,
            descriptionCompany: descriptionCompany,
            salary: salary,
            location: location,
            companyImage: companyImage,
            workingDate: workingDate,
            experience: experience,
            createdAt: createdAt
          }
        });
      }
    });
  };
};
