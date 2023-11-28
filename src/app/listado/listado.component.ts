import { Component } from '@angular/core';
import { PersonasComponent } from '../personas/personas.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  listaPersonas:PersonasComponent[] = [];

  agregarPersonas(nombre:string, apellido:string){

    let persona:PersonasComponent = new PersonasComponent(nombre, apellido);
    this.listaPersonas.push(persona);
  }
}
