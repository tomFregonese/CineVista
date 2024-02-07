import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewDetailsComponent } from '../view-details/view-details.component'; // Ajustez le chemin selon votre structure de projet

@Component({
  selector: 'app-little-posters',
  templateUrl: './little-posters.component.html',
  styleUrls: ['./little-posters.component.scss'],
})
export class LittlePostersComponent {
  @Input() public medias!: any[];

  constructor(public modalController: ModalController) {}

  async openDetailsModal(media: any) {
    const modal = await this.modalController.create({
      component: ViewDetailsComponent,
      componentProps: { selectedMedia: media }
    });
    await modal.present();
  }
}
