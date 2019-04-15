import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-act',
  templateUrl: './single-act.component.html',
  styleUrls: ['./single-act.component.scss'],
})
export class SingleActComponent implements OnInit {
  public agenda = {};
  constructor() { }

  ngOnInit() {
    this.agenda = require('../../assets/agenda/agenda.json');

  }

}
