import { Pipe, PipeTransform } from '@angular/core';
import { Jobs } from '../interfaces/jobs.interface';

@Pipe({
  name: 'filterSalary'
})
export class FilterSalaryPipe implements PipeTransform {

  transform(value: Array<Jobs>, arg: any): any {
    const resultPosts = [];
    for (const jobs of value) {
      if (jobs.salary.toPrecision().indexOf(arg) > -1) {
        resultPosts.push(jobs);
      };
    };
    return resultPosts;
  }
}