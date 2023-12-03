import { Component, Input  } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent {

  listaPersonas:Persona[] = this.personasService.listaPersonas;
  
  constructor(private personasService: PersonasService){}

}
