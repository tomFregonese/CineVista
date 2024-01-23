import { Component, Input } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { ModalController } from '@ionic/angular';
import { ViewDetailsComponent } from '../view-details/view-details.component';



@Component({
  selector: 'app-little-posters',
  templateUrl: './little-posters.component.html',
  styleUrls: ['./little-posters.component.scss'],
})
export class LittlePostersComponent {

  @Input() public medias!: any[];

  constructor(
    private _tmdbService: TmdbService,
    public modalController: ModalController
  ) {}

  async openDetailsModal(media: any) {
    const modal = await this.modalController.create({
      component: ViewDetailsComponent,
      componentProps: { selectedMedia: media }
    });
    return await modal.present();
  }
}
