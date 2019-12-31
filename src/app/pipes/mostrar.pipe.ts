import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrar'
})
export class MostrarPipe implements PipeTransform {

  transform(value: string, activar: boolean): any {
  if ( activar ) {
    let salida = '';
    for( let i = 0; i < value.length; i++) {
      salida += '*';
    }
    return salida;
  } else {
    return value;
  }
  }

}
