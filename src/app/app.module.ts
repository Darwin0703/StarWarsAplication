import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavesComponent } from './components/naves/naves.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PlanetasComponent } from './components/planetas/planetas.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { EspeciesComponent } from './components/especies/especies.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/shared/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    EspeciesComponent,
    HomeComponent,
    NavesComponent,
    PeliculasComponent,
    PersonajeComponent,
    PersonajesComponent,
    PlanetasComponent,
    VehiculosComponent,
    LoadingComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
