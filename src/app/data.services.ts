import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Conductor } from "./conductor.model";
import {Noticia} from "./noticia.model";
import { Usuario } from "./usuario.model";

@Injectable()
export class DataServices{
  constructor(private httpClient: HttpClient){}

  guardarNoticias(noticias: Noticia[]){
    this.httpClient.put('https://mujeres-al-volante-rd-default-rtdb.firebaseio.com/noticias.json', noticias).subscribe(
      response => console.log("se han guardado las noticias: " + response),
      error => console.log("error: " + error)
    );
  }

  guardarConductores(conductores: Conductor[]){
    this.httpClient.put('https://mujeres-al-volante-rd-default-rtdb.firebaseio.com/conductores.json', conductores).subscribe(
      response => console.log("se han guardado los conductores: " + response),
      error => console.log("error: " + error)
    );
  }

  guardarUsuarios(usuarios: Usuario[]){
    this.httpClient.put('https://mujeres-al-volante-rd-default-rtdb.firebaseio.com/usuarios.json', usuarios).subscribe(
      response => console.log("se han guardado los usuarios: " + response),
      error => console.log("error: " + error)
    );
  }

  cargarNoticias(){
    return this.httpClient.get('https://mujeres-al-volante-rd-default-rtdb.firebaseio.com/noticias.json');
  }

  cargarConductores(){
    return this.httpClient.get('https://mujeres-al-volante-rd-default-rtdb.firebaseio.com/conductores.json');
  }

  cargarUsuarios(){
    return this.httpClient.get('https://mujeres-al-volante-rd-default-rtdb.firebaseio.com/usuarios.json');
  }

  actualizarNoticias(indice: number, noticia: Noticia){
    let url = 'https://mujeres-al-volante-rd-default-rtdb.firebaseio.com/noticias/' + indice +'.json';
    this.httpClient.put(url, noticia).subscribe(
      response => console.log("se ha actualizado la noticia: " + response),
      error => console.log("error: " + error)
    );
  }

  eliminarNoticias(indice: number){
    let url = 'https://mujeres-al-volante-rd-default-rtdb.firebaseio.com/noticias/' + indice +'.json';
    this.httpClient.delete(url).subscribe(
      response => console.log("se ha eliminado la noticia: " + response),
      error => console.log("error: " + error)
    );
  }

  actualizarConductores(indice: number, conductor: Conductor){
    let url = 'https://mujeres-al-volante-rd-default-rtdb.firebaseio.com/conductores/' + indice +'.json';
    this.httpClient.put(url, conductor).subscribe(
      response => console.log("se ha actualizado el conductor: " + response),
      error => console.log("error: " + error)
    );
  }

  eliminarConductores(indice: number){
    let url = 'https://mujeres-al-volante-rd-default-rtdb.firebaseio.com/conductores/' + indice +'.json';
    this.httpClient.delete(url).subscribe(
      response => console.log("se ha eliminado el conductor: " + response),
      error => console.log("error: " + error)
    );
  }

  actualizarUsuarios(indice: number, usuario: Usuario){
    let url = 'https://mujeres-al-volante-rd-default-rtdb.firebaseio.com/usuarios/' + indice +'.json';
    this.httpClient.put(url, usuario).subscribe(
      response => console.log("se han actualizado el usuario: " + response),
      error => console.log("error: " + error)
    );
  }


}
