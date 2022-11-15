import { Component, OnInit } from '@angular/core';
import {Noticia} from '../noticia.model';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {



  constructor(private miServicio: NoticiasService) {

  }

  ngOnInit(): void {

    this.miServicio.obtenerNoticias().subscribe(
      misNoticias=>{
      console.log(misNoticias);
      this.noticias = Object.values(misNoticias);
      this.miServicio.setNoticias(this.noticias);
    }
    );

  }


  title = 'Noticias';
  noticias: Noticia[]=[];


  inputTitulo:string="";
  inputImagen:string="";
  inputTema:string="";
  inputNoticia:string="";
  inputAutor:string="";

  agregarNoticia(){
    let miNoticia = new Noticia(
      this.inputTitulo,
      this.inputImagen,
      this.inputTema,
      this.inputNoticia,
      this.inputAutor,
      );

    this.miServicio.agregarNoticiaServicio(miNoticia);
    //this.noticias.push(miNoticia);
  }

}
