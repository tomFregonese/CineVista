import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscoverPageRoutingModule } from './discover-routing.module';

import { DiscoverPage } from './discover.page';
import {LittlePostersComponent} from '../../components/little-posters/little-posters.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverPageRoutingModule
  ],
  exports: [
    LittlePostersComponent
  ],
  declarations: [DiscoverPage, LittlePostersComponent]
})
export class DiscoverPageModule {}
