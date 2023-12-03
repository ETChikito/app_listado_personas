import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
  
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<Persona>();

  // nombreInput:string = "";
  // apellidoInput:string = "";
  @ViewChild("nombreInput") nombreInput: ElementRef;
  @ViewChild("apellidoInput") apellidoInput: ElementRef;

  constructor(private logginService:LoggingService) { }


  agregarPersonas(){
    let persona1:Persona = new Persona(
      this.nombreInput.nativeElement.value, 
    this.apellidoInput.nativeElement.value);
    this.logginService.enviarMensajeAConsola("Enviamos persona:" + persona1.getNombre() + " Apellido:" + persona1.getApellido());
    this.personaCreada.emit(persona1);
  }
}
