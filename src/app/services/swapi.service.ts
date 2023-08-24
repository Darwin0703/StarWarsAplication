import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) {
      console.log("Consumiendo API");
   }

   getCall(endPoint: string){
    const url = `https://swapi.dev/api/${endPoint}`
    return this.http.get(url)
    .pipe(map(data=> data));
   }

   getNewCall(url: string){
    return this.http.get(url)
    .pipe(map(data => data));
   }
}  

