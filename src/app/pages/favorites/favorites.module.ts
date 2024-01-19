import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesPageRoutingModule } from './favorites-routing.module';

import { FavoritesPage } from './favorites.page';
import {DiscoverPageModule} from '../discover/discover.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FavoritesPageRoutingModule,
        DiscoverPageModule
    ],
  declarations: [FavoritesPage]
})
export class FavoritesPageModule {}
