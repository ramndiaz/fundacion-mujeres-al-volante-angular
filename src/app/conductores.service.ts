import { Injectable } from '@angular/core';
import { Conductor } from './conductor.model';
import { DataServices } from './data.services';
@Injectable({
  providedIn: 'root'
})
export class ConductoresService {

  constructor(private dataServiceConductores: DataServices) { }
  conductores: Conductor[]=[];
/*
  conductores: Conductor[]=[
    new Conductor("ramon", "diaz", "00115006892", "8097272375", "ramndiaz@gmail.com", "central 73, buenos aires", "mujeres al volante"),
    new Conductor("pedro", "Djesus", "00115006892", "8097272375", "pedrojesus@gmail.com", "central 73, buenos aires", "mujeres al volante"),
    new Conductor("martin", "canelo", "00115006892", "8097272375", "martincanelo@gmail.com", "central 73, buenos aires", "mujeres al volante"),
    new Conductor("julian", "ortiz", "00115006892", "8097272375", "julianortiz@gmail.com", "central 73, buenos aires", "mujeres al volante"),
    new Conductor("julia", "mejia", "00115006892", "8097272375", "juliamejia@gmail.com", "central 73, buenos aires", "mujeres al volante")
  ];
*/
  agregarConductorServicio(conductor: Conductor){
    this.conductores.push(conductor);
    this.dataServiceConductores.guardarConductores(this.conductores);
  }

  obtenerConductores(){
    return this.dataServiceConductores.cargarConductores();
  }

  setConductores(misConductores: Conductor[]){
    this.conductores =misConductores;
  }

  encontrarConductor(indice: number){
    let conductor: Conductor= this.conductores[indice];
    return conductor;
  }

  actualizarConductores(indice: number, nuevoConductor: Conductor){
    let conductorModificado: Conductor = this.conductores[indice];
    conductorModificado.nombre=nuevoConductor.nombre;
    conductorModificado.apellido=nuevoConductor.apellido;
    conductorModificado.cedula=nuevoConductor.cedula;
    conductorModificado.celular=nuevoConductor.celular;
    conductorModificado.email=nuevoConductor.email;
    conductorModificado.direccion=nuevoConductor.direccion;
    conductorModificado.plan=nuevoConductor.plan;
    console.log(conductorModificado);
    this.dataServiceConductores.actualizarConductores(indice, conductorModificado);
  }

  eliminarConductores(indice: number){
    this.dataServiceConductores.eliminarConductores(indice);
  }
}
