import { Component, Input  } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent {

  @Input() listaPersonas:Persona[] = [];
  
}
