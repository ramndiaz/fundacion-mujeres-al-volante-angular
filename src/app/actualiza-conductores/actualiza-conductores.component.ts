import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Conductor} from '../conductor.model';
import { ConductoresService } from '../conductores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualiza-conductores',
  templateUrl: './actualiza-conductores.component.html',
  styleUrls: ['./actualiza-conductores.component.css']
})
export class ActualizaConductoresComponent implements OnInit {

  title = 'Actualizar Noticias';
  conductor: Conductor[]=[];

  inputNombre:string="";
  inputApellido:string="";
  inputCedula:string="";
  inputCelular:string="";
  inputEmail:string="";
  inputDireccion:string="";
  inputPlan:string="";
  indice:number=0;


  constructor(private miServicio: ConductoresService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id'];
    let conductorActu: Conductor = this.miServicio.encontrarConductor(this.indice);

    this.inputNombre=conductorActu.nombre;
    this.inputApellido=conductorActu.apellido;
    this.inputCedula=conductorActu.cedula;
    this.inputCelular=conductorActu.celular;
    this.inputEmail=conductorActu.email;
    this.inputDireccion=conductorActu.direccion;
    this.inputPlan=conductorActu.plan;

    this.miServicio.obtenerConductores().subscribe(
      misConductores=>{
      console.log(misConductores);
      this.conductor = Object.values(misConductores);
      this.miServicio.setConductores(this.conductor);
    }
    );

  }


  actualizarConductor(){
    let nuevoConductor = new Conductor(
      this.inputNombre,
      this.inputApellido,
      this.inputCedula,
      this.inputCelular,
      this.inputEmail,
      this.inputDireccion,
      this.inputPlan,
      );

    this.miServicio.actualizarConductores(this.indice, nuevoConductor);
    this.router.navigate(['inicio']);
  }

  eliminarConductor(){
    this.miServicio.eliminarConductores(this.indice);
    this.router.navigate(['inicio']);
  }



}
