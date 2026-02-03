import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipepassword',
})
export class PipepasswordPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/./g, '*');
  }

}
