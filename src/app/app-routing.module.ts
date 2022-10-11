import { AulaComponent } from './aula/aula.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { InicioComponent} from './inicio/inicio.component';
import { NosotrosComponent} from './nosotros/nosotros.component';
import { NoticiasComponent} from './noticias/noticias.component';
import { ServiciosComponent } from './servicios/servicios.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'inicio', component: InicioComponent},
  {path:'aula', component: AulaComponent},
  {path:'contacto', component: ContactoComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'servicios', component: ServiciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
