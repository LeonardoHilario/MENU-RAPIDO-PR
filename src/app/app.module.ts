import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { RegistroComponent } from './registro/registro.component';
import { SesionComponent } from './sesion/sesion.component';
import { InicioComponent } from './content/inicio/inicio.component';
import { CargarscriptsService } from './cargarscripts.service';
import { RouterModule, Routes } from '@angular/router';
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from '../environments/environment';
import { FormsModule } from '@angular/forms';

/*Subcomponentes de content*/
import { CanjeaComponent } from './content/canjea/canjea.component';
import { PromocionesComponent } from './content/promociones/promociones.component';
import { RestaurantesComponent } from './content/restaurantes/restaurantes.component';
import { NovedadesComponent } from './content/novedades/novedades.component';
import { LoginComponent } from './login/login.component';
import { ContactanosComponent } from './content/contactanos/contactanos.component';


const appRoutes: Routes=[
  {path:'', component:InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'Promociones', component: PromocionesComponent},
  {path:'Canjea', component: CanjeaComponent},
  {path:'Restaurantes', component:RestaurantesComponent},
  {path:'Novedades', component:NovedadesComponent},
  {path:'Login', component:LoginComponent},
  {path: 'Sesion', component:SesionComponent},
  {path:'Registro',component:RegistroComponent},
  {path:'Contactanos', component:ContactanosComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    RegistroComponent,
    SesionComponent,
    InicioComponent,
    CanjeaComponent,
    PromocionesComponent,
    RestaurantesComponent,
    NovedadesComponent,
    LoginComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    FormsModule,
    AngularFireModule.initializeApp({ 
    apiKey: "AIzaSyBPbfOrHdt5HfvCEdwg_XwlY13xdiUEfoY",
    authDomain: "paseoreforma-comida.firebaseapp.com",
    projectId: "paseoreforma-comida",
    storageBucket: "paseoreforma-comida.appspot.com",
    messagingSenderId: "851846139714",
    appId: "1:851846139714:web:efc1d65a5caa6d93f282db",
    measurementId: "G-EL5X7S46T4"
  })
  ],
  providers: [
    CargarscriptsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
