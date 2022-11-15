export class Noticia{
  titulo:string ="";
  imagen:string="";
  tema:string ="";
  noticia:string = "";
  autor:string = "";

  constructor(titulo:string, imagen:string, tema:string, noticia:string, autor:string){
    this.titulo= titulo;
    this.imagen= imagen;
    this.tema= tema;
    this.noticia= noticia;
    this.autor= autor;
  }

}
