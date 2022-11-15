import { Component, OnInit } from '@angular/core';
import {Usuario} from '../usuario.model';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private miServicio: UsuariosService) { }

  ngOnInit(): void {
    //this.usuarios = this.miServicio.usuarios;
    this.miServicio.obtenerUsuarios().subscribe(
      misUsuarios=>{
        console.log(misUsuarios);
        this.usuarios = Object.values(misUsuarios);
        this.miServicio.setUsuarios(this.usuarios);
      }
    );
  }


  title = 'Usuarios';
  usuarios: Usuario[]=[
    //new Usuario("ramon123", "ramon@gmail.com", "clavesecreta"),
    //new Usuario("pedro123", "pedro@gmail.com", "clavesecreta"),
    //new Usuario("jose123", "jose@gmail.com", "clavesecreta"),
    //new Usuario("maria123", "maria@gmail.com", "clavesecreta"),
    //new Usuario("lucia123", "lucia@gmail.com", "clavesecreta")
  ];

  inputUsername:string="";
  inputEmail:string="";
  inputPassword:string="";
  inputIsAdmin:boolean=false;

  agregarUsuario(){
    let miUsuario = new Usuario(
      this.inputUsername,
      this.inputEmail,
      this.inputPassword,
      this.inputIsAdmin
      );
    //this.miServicio.muestraMensaje(miEmpleado.nombre);
    this.miServicio.agregarUsuarioServicio(miUsuario);
    //this.usuarios.push(miUsuario);
  }

}
