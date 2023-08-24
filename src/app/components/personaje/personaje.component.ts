import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent {

  personaje: any;
  mostrar?: boolean;   
  planeta: any;
  species: string[] = [];
  peliculas: string[] = [];
  naves: string[] = [];
  vehiculos: string[] = [];

  constructor(private route: Router, private service: SwapiService) {
    if (history.state.data === undefined) {
      this.mostrar = false;
      this.route.navigate(['/personajes']);
    } else {
      this.personaje = history.state.data;
      this.loadHome();
      this.loadSpecies();
      this.loadFilms();
      this.loadStarships();
      this.loadVehicles();
    }
  }

  ngOnInit() {

  }

  loadHome() {
    this.service.getNewCall(this.personaje.homeworld)
      .subscribe((data: any) => {
        console.log(data);
        this.planeta = data;
      });
  }

  loadSpecies() {
    this.personaje.species.forEach((element: string) => {
      this.service.getNewCall(element)
        .subscribe( (data: any) => {
          this.species.push(data.name);
        });
    });
  }

  loadFilms() {
    this.personaje.films.forEach((filmUrl: string) => {
      this.service.getNewCall(filmUrl)
        .subscribe( (data: any) => {
          this.peliculas.push(data.title);
        });
    });
  }

  loadStarships() {
    this.personaje.starships.forEach((starshipUrl: string) => {
      this.service.getNewCall(starshipUrl)
        .subscribe( (data: any) => {
          this.naves.push(data.name);
        });
    });
  }

  loadVehicles() {
    this.personaje.vehicles.forEach((vehicleUrl: string) => {
      this.service.getNewCall(vehicleUrl)
        .subscribe( (data: any) => {
          this.vehiculos.push(data.name);
          this.mostrar = true;
        });
    });
  }

  previousPage() {
    this.route.navigate(['/personajes']);
  }

}
