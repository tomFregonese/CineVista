  import {Component} from '@angular/core';
  import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
  import {ThemeService} from '../../services/theme.service';

  @Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
  })

  export class SettingsPage {
    theme: 'dark' | 'light' | 'auto' = 'auto';
    profilePictureUrl: string | null = null;

    constructor(
      private themeService : ThemeService
    ) {}


    /*toggleTheme(theme: 'dark' | 'light' | 'auto') {
      this.themeService.setTheme(theme)
    }*/

    async loadingRestart() {
      let countdown = 3;

      const countdownElement = document.getElementById('countdown');
      if (countdownElement) {
        countdownElement.innerText = `Redémarrage dans ${countdown} secondes...`;
      }

      const intervalId = setInterval(() => {
        countdown--;
        if (countdown >= 0 && countdownElement) {
          countdownElement.innerText = `Redémarrage dans ${countdown} secondes...`;
        } else {
          clearInterval(intervalId);
          localStorage.setItem('navigateToDiscover', 'true');
          window.location.reload();
        }
      }, 1000);
    }

    async takeOrChoosePhoto() {
      try {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Prompt,
          saveToGallery: true,
          correctOrientation: true
        });

        // Vérifiez si image.dataUrl n'est pas undefined avant de l'assigner
        if (image.dataUrl) {
          this.profilePictureUrl = image.dataUrl;
        } else {
          // Gérez le cas où aucune image n'est retournée
          console.log("Aucune image sélectionnée ou erreur lors de la prise de photo");
        }
      } catch (error) {
        console.error('Erreur lors de la prise ou du choix de la photo:', error);
      }
    }

  }
