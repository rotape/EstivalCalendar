import { Component, OnInit } from '@angular/core';
import { ActsService } from '../services/acts.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  objectKeys = Object.keys;
  public agenda = [];
  constructor(private actsService: ActsService) {}
  ngOnInit(): void {
   this.actsService.getActs().subscribe((res) => {
    this.agenda = res;
      console.log(this.agenda);
    });
  }

}
