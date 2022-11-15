import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Noticia} from '../noticia.model';
import { NoticiasService } from '../noticias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualiza-noticias',
  templateUrl: './actualiza-noticias.component.html',
  styleUrls: ['./actualiza-noticias.component.css']
})
export class ActualizaNoticiasComponent implements OnInit {

  title = 'Actualizar Noticias';
  noticias: Noticia[]=[];

  inputTitulo:string="";
  inputImagen:string="";
  inputTema:string="";
  inputNoticia:string="";
  inputAutor:string="";
  indice:number=0;

  constructor(private miServicio: NoticiasService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id'];
    let noticiaActu: Noticia = this.miServicio.encontrarNoticia(this.indice);

    this.inputTitulo=noticiaActu.titulo;
    this.inputImagen=noticiaActu.imagen;
    this.inputTema=noticiaActu.tema;
    this.inputNoticia=noticiaActu.noticia;
    this.inputAutor=noticiaActu.autor;

    this.miServicio.obtenerNoticias().subscribe(
      misNoticias=>{
      console.log(misNoticias);
      this.noticias = Object.values(misNoticias);
      this.miServicio.setNoticias(this.noticias);
    }
    );

  }


  actualizarNoticia(){
    let nuevaNoticia = new Noticia(
      this.inputTitulo,
      this.inputImagen,
      this.inputTema,
      this.inputNoticia,
      this.inputAutor,
      );

    this.miServicio.actualizarNoticias(this.indice, nuevaNoticia);
    this.router.navigate(['inicio']);
  }

  eliminarNoticia(){
    this.miServicio.eliminarNoticias(this.indice);
    this.router.navigate(['inicio']);
  }

}
