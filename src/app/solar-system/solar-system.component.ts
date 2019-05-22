import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { HelloworldService } from '../helloworld.service';

@Component({
  selector: 'app-solar-system',
  templateUrl: './solar-system.component.html',
  styleUrls: ['./solar-system.component.css']
})
export class SolarSystemComponent implements OnInit {

  public planets:Planet[];
  private myService:HelloworldService;

  constructor(param_service: HelloworldService) { 
    this.myService =param_service;
    this.planets = [];
  }

  ngOnInit() {
    this.myService.getPlanet().subscribe(
      (param_planets:Planet[])=>{
        this.planets = param_planets;
      }
    )
  }

}
