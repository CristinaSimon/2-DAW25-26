import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notaPipes',
})
export class NotaPipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
