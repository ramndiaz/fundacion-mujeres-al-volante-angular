import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { AulaComponent } from './aula/aula.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DataServices } from './data.services';
import { ConductoresComponent } from './conductores/conductores.component';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NoticiasService } from './noticias.service';
import { UsuariosService } from './usuarios.service';
import { ConductoresService } from './conductores.service';
import { ActualizaNoticiasComponent } from './actualiza-noticias/actualiza-noticias.component';
import { ActualizaConductoresComponent } from './actualiza-conductores/actualiza-conductores.component';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    FooterComponent,
    SliderComponent,
    NoticiasComponent,
    NosotrosComponent,
    ContactoComponent,
    InicioComponent,
    AulaComponent,
    ServiciosComponent,
    FeedbackComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    ErrorPersonalizadoComponent,
    ConductoresComponent,
    UsuariosComponent,
    ActualizaNoticiasComponent,
    ActualizaConductoresComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataServices, NoticiasService, UsuariosService, ConductoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
