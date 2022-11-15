import { Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private dataServiceUsuarios: DataServices) { }
  usuarios: Usuario[]=[];
/*
  usuarios: Usuario[]=[
    new Usuario("ramon123", "ramon@gmail.com", "clavesecreta", false),
    new Usuario("pedro123", "pedro@gmail.com", "clavesecreta", false),
    new Usuario("jose123", "jose@gmail.com", "clavesecreta", false),
    new Usuario("maria123", "maria@gmail.com", "clavesecreta", false),
    new Usuario("lucia123", "lucia@gmail.com", "clavesecreta", false)
  ];
*/
  agregarUsuarioServicio(usuario: Usuario){
    this.usuarios.push(usuario);
    this.dataServiceUsuarios.guardarUsuarios(this.usuarios);
  }

  obtenerUsuarios(){
    return this.dataServiceUsuarios.cargarUsuarios();
  }

  setUsuarios(misUsuarios: Usuario[]){
    this.usuarios =misUsuarios;
  }

}
