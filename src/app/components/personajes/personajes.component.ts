import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  personajes: any[] = [];
  loading: boolean;
  nextUrl: any;       //originalmente son datos tipo string
  previousUrl: any;   //originalmente son datos tipo string

  constructor( private swapi: SwapiService, private router: Router) {
    this.loading = true;
    this.swapi.getCall('people')
      .subscribe( (data: any) => {
        console.log(data);
        this.personajes = data['results'];
        this.loading = false;
        this.nextUrl = data['next'];
        this.previousUrl = data['previous'];
        console.log(this.previousUrl);
      });
  }

  nextPage() {
    if (this.nextUrl !== '' && this.nextUrl !== null) {
      console.log(this.nextUrl);
      this.loading = true;
      this.swapi.getNewCall(this.nextUrl)
        .subscribe( (data: any) => {
          console.log(data);
          this.personajes = data['results'];
          this.nextUrl = data['next'];
          this.previousUrl = data['previous'];
          this.loading = false;
        });
    }
  }

  previousPage() {
    if (this.previousUrl !== '' && this.previousUrl !== null ) {
      this.loading = true;
      console.log(this.previousUrl);
      this.swapi.getNewCall(this.previousUrl)
        .subscribe( (data: any) => {
          console.log(data);
          this.personajes = data['results'];
          this.nextUrl = data['next'];
          this.previousUrl = data['previous'];
          this.loading = false;
        });
    }
  }

  verPersonaje(personaje: any) {
    console.log(personaje);
    this.router.navigate(['/people'], {state: {data: personaje}});
  }

}
