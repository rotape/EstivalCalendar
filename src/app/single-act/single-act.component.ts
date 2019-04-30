import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ActsService } from '../services/acts.service';

@Component({
  selector: 'app-single-act',
  templateUrl: './single-act.component.html',
  styleUrls: ['./single-act.component.scss'],
})
export class SingleActComponent implements OnInit {
  public act = [];
  public agenda = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private actsService: ActsService,
  ) { }

  ngOnInit() {
    this.getAct();
  }
  getAct() {
    const link = this.route.snapshot.paramMap.get('link');
    this.actsService.getActs().subscribe((res) => {
      this.agenda = res;
        console.log("Agenda", this.agenda);
        this.act = this.agenda.filter(act => act.link === link)[0];
        console.log("link", link, this.agenda, this.act);
      });

  }

  gotoList() {
    this.router.navigate(['']);
  }

}
