import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  listaPersonas:Persona[] = [];

  personaAgregada(persona: Persona){
    this.listaPersonas.push(persona);
  }
}
