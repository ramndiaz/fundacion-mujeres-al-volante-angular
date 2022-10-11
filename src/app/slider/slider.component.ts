import { Component, OnInit } from '@angular/core';
import{NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  imagenes: any[]=[
    {name:'nuestra fundadora',
    img:'assets/imagen1.jpeg',
    desc:'conoce nuestra fundadora, maria Diaz, quien siempre ha tenido el deseo de ayudar su comunidad'
    },
    {name:'nuestras participantes',
    img:'assets/imagen2.jpeg',
    desc:'conoce nuestras participantes, por medio de nuestros programas pueden acceder a clases de manejo totalmente gratis'
    },
    {name:'nuestros miembros',
    img:'assets/imagen3.jpeg',
    desc:'conoce nuestro equipo de heroes que siempre tienen una sonrisa y estan preparados para servirte'
    },
    {name:'nuestra comunidad',
    img:'assets/imagen4.jpeg',
    desc:'siempre hemos estado para nuestra gente, ese es el lema de nuestra fundadora'
    }
  ];


  constructor(private_config: NgbCarouselConfig) { }

  ngOnInit(): void {
  }

}
