import {Component, EventEmitter, Input, Output} from '@angular/core';
import {InfiniteScrollCustomEvent, ModalController} from '@ionic/angular';
import { ViewDetailsComponent } from '../view-details/view-details.component';


@Component({
  selector: 'app-little-posters',
  templateUrl: './little-posters.component.html',
  styleUrls: ['./little-posters.component.scss'],
})
export class LittlePostersComponent {

  @Input() showInfiniteScroll = true;
  @Input() public medias!: any[];
  @Output() public ionInfinite: EventEmitter<any> = new EventEmitter<any>();

  constructor(
      public modalController: ModalController
  ) {}


  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    this.ionInfinite.emit(ev);
  }


  async openDetailsModal(media: any) {
    const modal = await this.modalController.create({
      component: ViewDetailsComponent,
      componentProps: { selectedMedia: media }
    });
    await modal.present();
  }
}
