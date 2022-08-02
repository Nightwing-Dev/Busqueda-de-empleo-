import { Pipe, PipeTransform } from '@angular/core';
import { Jobs } from '../interfaces/jobs.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Jobs>, arg: any): any {
    const resultPosts = [];
    for (const jobs of value) {
      if (jobs.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        (jobs.toString().toLowerCase());
        resultPosts.push(jobs);   
      };
    };
    return resultPosts;
  }
}
 