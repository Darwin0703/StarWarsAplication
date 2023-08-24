import { Component } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent {
  
  vehiculos: any[] = [];
  loading: boolean;
  nextUrl: any;   //originalmente son datos tipo string
  previousUrl: any; //originalmente son datos tipo string

  constructor( private swapi: SwapiService) {
    this.loading = true;
    this.swapi.getCall('vehicles/')
      .subscribe( (data: any) => {
        console.log(data);
        this.vehiculos = data['results'];
        this.loading = false;
        this.nextUrl = data['next'];
        this.previousUrl = data['previous'];
      });
  }

  nextPage() {
    if (this.nextUrl !== '') {
      console.log(this.nextUrl);
      this.loading = true;
      this.swapi.getNewCall(this.nextUrl)
        .subscribe( (data: any) => {
          console.log(data);
          this.vehiculos = data['results'];
          this.nextUrl = data['next'];
          this.previousUrl = data['previous'];
          this.loading = false;
        });
    }
  }

  previousPage() {
    if (this.previousUrl !== '') {
      this.loading = true;
      this.swapi.getNewCall(this.previousUrl)
        .subscribe( (data: any) => {
          console.log(data);
          this.vehiculos = data['results'];
          this.nextUrl = data['next'];
          this.previousUrl = data['previous'];
          this.loading = false;
        });
    }
  }
  
}
