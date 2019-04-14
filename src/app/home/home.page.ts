import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  objectKeys = Object.keys;
  public agenda = [];
  ngOnInit(): void {
    this.agenda = require('../../assets/agenda/agenda.json');
    console.log(this.agenda);
  }

}
