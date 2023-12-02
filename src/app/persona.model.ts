import { Inject } from "@angular/core";

export class Persona {
  
    constructor(@Inject(String) private nombre:string,@Inject(String) private apellido:string){}
  
    getNombre(){
      return this.nombre;
    }
  
    getApellido(){
      return this.apellido;
    }
  
  }