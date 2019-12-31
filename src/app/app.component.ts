import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  video = 'TNhullAIZMU';
  password = 'K3rz3l_1988';
  nombre = 'Villamar';
  nombre2 = 'josE gReGoRiO ViLlAmAr VeLeZ';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI ;
  porc = '0.234';
  salario = ' 1250.50';

  estudiante = {
    nombre: 'Jose Gregorio',
    apellido: 'Villamar Vlez',
    ci: '18369996',
    carrera: 'Informatica',
    direccion : {
      calle: 'San Isidro',
      edifio: '40',
      departamento: '157'
    }
  };
  ValorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('llego la data'), 3000);
  });

  fecha = new Date ( );

  // Declaracion del catalizador personalizador para activar la variablo
  activar: boolean = true;

}
