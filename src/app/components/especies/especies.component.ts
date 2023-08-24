import { Component } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.css']
})
export class EspeciesComponent {

  [x: string]: any;

  especies: any[] = [];
  loading: boolean;
  nextUrl: any;       //originalmente son datos tipo string
  previousUrl: any;   //originalmente son datos tipo string

  constructor( private swapi: SwapiService) {
    this.loading = true;
    this.swapi.getCall('species/')
      .subscribe( (data: any) => {
        console.log(data);
        this.especies = data['results'];
        this.loading = false;
        this.nextUrl = data['next'];
        this.previousUrl = data['previous'];
      });
  }

  nextPage() {
    if (this.nextUrl !== '' && this.nextUrl !== null) {
      console.log(this.nextUrl);
      this.loading = true;
      this.swapi.getNewCall(this.nextUrl)
        .subscribe( (data: any) => {
          console.log(data);
          this.especies = data['results'];
          this.nextUrl = data['next'];
          this.previousUrl = data['previous'];
          this.loading = false;
        });
    }
  }

  previousPage() {
    if (this.previousUrl !== '' && this.previousUrl !== null) {
      this.loading = true;
      this.swapi.getNewCall(this.previousUrl)
        .subscribe( (data: any) => {
          console.log(data);
          this.especies = data['results'];
          this.nextUrl = data['next'];
          this.previousUrl = data['previous'];
          this.loading = false;
        });
    }
  }

}
