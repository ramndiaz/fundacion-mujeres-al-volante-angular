import { Component, OnInit } from '@angular/core';
import { Conductor} from '../conductor.model';
import { ConductoresService } from '../conductores.service';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.css']
})
export class ConductoresComponent implements OnInit {

  constructor(private miServicio: ConductoresService) { }

  ngOnInit(): void {
    //this.conductores = this.miServicio.conductores;
    this.miServicio.obtenerConductores().subscribe(
      misConductores=>{
        console.log(misConductores);
        this.conductores = Object.values(misConductores);
        this.miServicio.setConductores(this.conductores);
      }
    );
  }

  title = 'Conductores';
  conductores: Conductor[]=[
    //new Conductor("ramon", "diaz", "00115006892", "8097272375", "ramndiaz@gmail.com", "central 73, buenos aires", "mujeres al volante"),
    //new Conductor("pedro", "Djesus", "00115006892", "8097272375", "pedrojesus@gmail.com", "central 73, buenos aires", "mujeres al volante"),
    //new Conductor("martin", "canelo", "00115006892", "8097272375", "martincanelo@gmail.com", "central 73, buenos aires", "mujeres al volante"),
    //new Conductor("julian", "ortiz", "00115006892", "8097272375", "julianortiz@gmail.com", "central 73, buenos aires", "mujeres al volante"),
    //new Conductor("julia", "mejia", "00115006892", "8097272375", "juliamejia@gmail.com", "central 73, buenos aires", "mujeres al volante")
  ];

  inputNombre:string="";
  inputApellido:string="";
  inputCedula:string="";
  inputCelular:string="";
  inputEmail:string="";
  inputDireccion:string="";
  inputPlan:string="";

  agregarConductor(){
    let miConductor = new Conductor(
      this.inputNombre,
      this.inputApellido,
      this.inputCedula,
      this.inputCelular,
      this.inputEmail,
      this.inputDireccion,
      this.inputPlan
      );
    //this.miServicio.muestraMensaje(miEmpleado.nombre);
    this.miServicio.agregarConductorServicio(miConductor);
    //this.conductores.push(miConductor);
  }


}
