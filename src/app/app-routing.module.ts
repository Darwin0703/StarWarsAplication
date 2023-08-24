import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { NavesComponent } from './components/naves/naves.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { EspeciesComponent } from './components/especies/especies.component';
import { PlanetasComponent } from './components/planetas/planetas.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'personajes', component: PersonajesComponent},
  {path: 'people', component: PersonajeComponent},
  {path: 'peliculas', component: PeliculasComponent},
  {path: 'naves', component: NavesComponent},
  {path: 'vehiculos', component: VehiculosComponent},
  {path: 'especies', component: EspeciesComponent},
  {path: 'planetas', component: PlanetasComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
