import { Component } from '@angular/core';
import { PersonasComponent } from '../personas/personas.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  listaPersonas:PersonasComponent[] = [];
  nombreInput:string = "";
  apellidoInput:string = "";

  agregarPersonas(){
    let persona:PersonasComponent = new PersonasComponent(this.nombreInput, this.apellidoInput);
    this.listaPersonas.push(persona);
  }
}
