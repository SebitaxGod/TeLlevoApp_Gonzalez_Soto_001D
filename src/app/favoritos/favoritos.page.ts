import { Component } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: 'favoritos.page.html',
  styleUrls: ['favoritos.page.scss'],
})
export class FavoritosPage {
  choferesFavoritos: any[] = [
    {
      nombre: 'Chofer A',
      totalViajes: 5,
      viajes: [
        {
          origen: 'Ciudad A',
          destino: 'Ciudad B',
          precio: '$20',
        },
        {
          origen: 'Ciudad C',
          destino: 'Ciudad D',
          precio: '$15',
        },
        // Agrega más viajes ficticios según sea necesario
      ],
    },
    {
      nombre: 'Chofer B',
      totalViajes: 3,
      viajes: [
        {
          origen: 'Ciudad E',
          destino: 'Ciudad F',
          precio: '$18',
        },
        // Agrega más viajes ficticios según sea necesario
      ],
    },
    // Agrega más choferes ficticios según sea necesario
  ];

  constructor() {}
}