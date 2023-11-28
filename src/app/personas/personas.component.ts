import { Component } from '@angular/core';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})

export class PersonasComponent {
  
  private nombre:string;
  private apellido:string;

  constructor(@Inject(String) nombre:string, @Inject(String) apellido:string){
    this.nombre = nombre;
    this.apellido = apellido;
  }

  getNombre(){
    return this.nombre;
  }

  getApellido(){
    return this.apellido;
  }

}
