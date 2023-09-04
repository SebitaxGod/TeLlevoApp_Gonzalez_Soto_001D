import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private menuController: MenuController,
    private actionSheetController: ActionSheetController,
    private router: Router // Inyecta el Router
  ) {}

  openCustomMenu() {
    // Abre el menú personalizado
    this.menuController.open('custom');
  }

  async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Soy Chofer',
          icon: 'car-outline',
          handler: () => {
            this.router.navigate(['/viajes']);
           
          },
        },
        {
          text: 'Soy Pasajero',
          icon: 'person-outline',
          handler: () => {
            this.router.navigate(['/viajes']);
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
}