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
    profilePicture : any = 'assets/images/default-picture-profile.jpeg';

    constructor(private themeService : ThemeService) {
      if (localStorage.getItem('profilePicture')) {
        this.profilePicture = localStorage.getItem('profilePicture');
      }
  }

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
          saveToGallery: false,
          correctOrientation: true
        });
        if (image.dataUrl) {
          localStorage.setItem('profilePicture', image.dataUrl);
          this.profilePicture = image.dataUrl;
        }
      } catch (error) {
        console.error('Error while taking or choosing the photo:', error);
      }
    }

  }
