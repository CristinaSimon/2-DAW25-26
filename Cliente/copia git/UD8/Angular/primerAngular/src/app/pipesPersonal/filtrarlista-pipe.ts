import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarlista',
})
export class FiltrarlistaPipe implements PipeTransform {

  transform(lista: number[], min:number, max:number): number[] {
    const listFil=lista.filter(e => e>=min && e<=max)
    return listFil.sort((a,b)=>b-a);
  }

}
