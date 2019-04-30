import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SingleActComponent } from '../single-act/single-act.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActsService } from '../services/acts.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'act/:link',
        component: SingleActComponent
      }
    ])
  ],
  declarations: [HomePage, SingleActComponent, HeaderComponent, FooterComponent]
})
export class HomePageModule {}
