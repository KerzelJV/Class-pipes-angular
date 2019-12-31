import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// LOCATE_ID = sirve para cambiar el idioma.
import { NgModule, LOCALE_ID } from '@angular/core';
// Importar para que funcione el cambio de idioma
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
// import domseguro
import { DonSeguro } from './pipes/domseguro.pipe';
//
import { MostrarPipe } from './pipes/mostrar.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DonSeguro,
    MostrarPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
