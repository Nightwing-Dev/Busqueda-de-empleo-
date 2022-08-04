import { Component, OnInit } from '@angular/core';
import { Jobs } from 'src/app/interfaces/jobs.interface';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-created-vacancy',
  templateUrl: './created-vacancy.component.html',
  styleUrls: ['./created-vacancy.component.scss']
})
export class CreatedVacancyComponent implements OnInit {
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
}