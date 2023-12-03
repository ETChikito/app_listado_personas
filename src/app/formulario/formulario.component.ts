import { Component, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
  
})
export class FormularioComponent {

  //@Output() personaCreada = new EventEmitter<Persona>();

  // nombreInput:string = "";
  // apellidoInput:string = "";
  @ViewChild("nombreInput") nombreInput: ElementRef;
  @ViewChild("apellidoInput") apellidoInput: ElementRef;

  constructor(private logginService:LoggingService, private personasService:PersonasService) { }


  agregarPersonas(){
    let persona1:Persona = new Persona(
      this.nombreInput.nativeElement.value, 
    this.apellidoInput.nativeElement.value);
    //this.personaCreada.emit(persona1);
    this.personasService.agregarPersona(persona1);
  }
}
