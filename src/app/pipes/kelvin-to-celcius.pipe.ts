import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelcius',
  standalone: true
})
export class KelvinToCelciusPipe implements PipeTransform {
  transform(value: number): number {
    return Math.floor(value - 273.15);
  }
}
