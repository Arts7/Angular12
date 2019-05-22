import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public currentName:string="Grenet";
  public currentSurname:string="Aurelien";
  public currentEmail:string="aurelien.grenet@gmail.com";
  public currentAge:number= 18;

  constructor() { }

  ngOnInit() {
  }
}

