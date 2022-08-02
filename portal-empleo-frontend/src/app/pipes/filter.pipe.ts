import { Pipe, PipeTransform } from '@angular/core';
import { Jobs } from '../interfaces/jobs.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Jobs>, arg: any): any {
    const resultPosts = [];
    for (const jobs of value) {
      (value.toString().toLowerCase());
      if (jobs.title.indexOf(arg) > -1) {
        resultPosts.push(jobs);   
      };
    };
    return resultPosts;
  }
}

