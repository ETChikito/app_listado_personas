import { Component } from '@angular/core';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})

export class PersonasComponent {
  
  constructor(@Inject(String) private nombre:string,@Inject(String) private apellido:string){}

  getNombre(){
    return this.nombre;
  }

  getApellido(){
    return this.apellido;
  }

}
