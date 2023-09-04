import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Importa AlertController

@Component({
  selector: 'app-viajes',
  templateUrl: 'viajes.page.html',
  styleUrls: ['viajes.page.scss'],
})
export class ViajesPage {
  constructor(
    private menuController: MenuController,
    private actionSheetController: ActionSheetController,
    private router: Router,
    private alertController: AlertController // Inyecta AlertController
  ) {}

  openCustomMenu() {
    this.menuController.open('custom');
  }

  async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Opción 1',
          icon: 'bookmark',
          handler: () => {
            this.router.navigate(['/viajes']);
          },
        },
        {
          text: 'Opción 2',
          icon: 'settings',
          handler: () => {
            // Manejar la acción de la Opción 2
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            // Manejar la acción de cancelar
          },
        },
      ],
    });

    await actionSheet.present();
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Su viaje fue agendado.',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/home']); // Redirige a la página "home"
          },
        },
      ],
    });

    await alert.present();
  }
}