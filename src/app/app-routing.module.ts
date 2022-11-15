import { AulaComponent } from './aula/aula.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { InicioComponent} from './inicio/inicio.component';
import { NosotrosComponent} from './nosotros/nosotros.component';
import { NoticiasComponent} from './noticias/noticias.component';
import { ServiciosComponent } from './servicios/servicios.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { ConductoresComponent } from './conductores/conductores.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ActualizaNoticiasComponent } from './actualiza-noticias/actualiza-noticias.component';
import { ActualizaConductoresComponent } from './actualiza-conductores/actualiza-conductores.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'actualizaNoticias/:id', component: ActualizaNoticiasComponent},
  {path: 'actualizaConductores/:id', component: ActualizaConductoresComponent},
  {path:'home', component: HomeComponent},
  {path:'inicio', component: InicioComponent},
  {path:'aula', component: AulaComponent},
  {path:'contacto', component: ContactoComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path:'signin', component: SigninComponent},
  {path:'signup', component: SignupComponent},
  {path:'conductores', component: ConductoresComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path:'**', component: ErrorPersonalizadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
