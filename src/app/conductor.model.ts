export class Conductor{
  nombre:string="";
  apellido:string="";
  cedula:string="";
  celular:string="";
  email:string="";
  direccion:string="";
  plan:string = "";

  constructor(nombre:string, apellido:string, cedula:string, celular:string, email:string, direccion:string, plan:string){
    this.nombre= nombre;
    this.apellido= apellido;
    this.cedula= cedula;
    this.celular= celular;
    this.email= email;
    this.direccion= direccion;
    this.plan= plan;
  }

}
