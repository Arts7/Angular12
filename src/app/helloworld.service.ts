import { Injectable } from '@angular/core';
import { Planet } from './planet';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HelloworldService {
  
  private myService:HttpClient;

  constructor(param_http:HttpClient) {
    this.myService=param_http;
   }

public getMessage():string{
  return "Hello World";
}

public getTitle():string{
  return "Hello les Boys";
}

public getPlanet():Observable<Planet[]>{
  
  return this.myService.get<Planet[]>("assets/planet.json");
}

}
