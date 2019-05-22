import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peek-aboo',
  templateUrl: './peek-aboo.component.html',
  styleUrls: ['./peek-aboo.component.css']
})
export class PeekAbooComponent implements OnInit {

  constructor() { 
    console.log("1");
   }

  ngOnInit() {
    console.log("2");
  }

}
