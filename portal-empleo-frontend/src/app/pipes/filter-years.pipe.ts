import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterYears'
})
export class FilterYearsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
