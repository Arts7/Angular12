import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../planet';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  @Input()
  public myplanet:Planet;

  constructor() { }

  ngOnInit() {
  }

}
