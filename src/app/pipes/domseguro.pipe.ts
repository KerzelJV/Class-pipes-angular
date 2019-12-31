import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DonSeguro implements PipeTransform {

  // ahora para usa el DomSanitizer necesito declararlo en el constructor.
  constructor( private domSanitizer: DomSanitizer ) {

  }

  transform(value: string, url: string ): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value ) ;
  }

}
