import { Persona } from "./persona.model";
import { LoggingService } from "./LoggingService.service";
import {Injectable} from "@angular/core";

//Se utiliza injectable para poder utilizar un servicio dentro de otro servicio.
@Injectable()
export class PersonasService{
    listaPersonas: Persona[] = [];
    
    constructor(private logginService:LoggingService){}

    agregarPersona(persona: Persona){
        this.listaPersonas.push(persona);
        this.logginService.enviarMensajeAConsola("Enviamos persona:" + persona.getNombre() + " Apellido:" + persona.getApellido());
    }
}