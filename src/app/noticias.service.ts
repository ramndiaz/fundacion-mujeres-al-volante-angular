import { Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { Noticia } from './noticia.model';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private dataServiceNoticias: DataServices) { }
  noticias: Noticia[]=[];

  agregarNoticiaServicio(noticia: Noticia){
    this.noticias.push(noticia);
    this.dataServiceNoticias.guardarNoticias(this.noticias);
  }

  setNoticias(misNoticias: Noticia[]){
    this.noticias =misNoticias;
  }

  obtenerNoticias(){
    return this.dataServiceNoticias.cargarNoticias();
  }

  encontrarNoticia(indice: number){
    let noticia: Noticia= this.noticias[indice];
    return noticia;
  }
  actualizarNoticias(indice: number, nuevaNoticia: Noticia){
    let noticiaModificada: Noticia = this.noticias[indice];
    noticiaModificada.titulo=nuevaNoticia.titulo;
    noticiaModificada.tema=nuevaNoticia.tema;
    noticiaModificada.noticia=nuevaNoticia.noticia;
    noticiaModificada.autor=nuevaNoticia.autor;
    noticiaModificada.imagen=nuevaNoticia.imagen;
    console.log(noticiaModificada);
    this.dataServiceNoticias.actualizarNoticias(indice, noticiaModificada);
  }

  eliminarNoticias(indice: number){
    this.dataServiceNoticias.eliminarNoticias(indice);
  }

}

/*
  noticias: Noticia[]=[
    new Noticia("Las Licencias Estan Caras", "10.img", "Documentos", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "ramon diaz"),
    new Noticia("Muchos Accidentes", "11.img", "Seguridad", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "ramon diaz"),
    new Noticia("Mucho Trafico", "12.img", "Transito", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "ramon diaz"),
    new Noticia("El Cinturon de Seguridad", "13.img", "Seguridad", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "ramon diaz"),
    new Noticia("Los Frenos", "14.img", "Seguridad", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "ramon diaz")
  ];
*/

/*
  muestraMensaje(mensaje:string){
    alert(mensaje);
  }
*/
