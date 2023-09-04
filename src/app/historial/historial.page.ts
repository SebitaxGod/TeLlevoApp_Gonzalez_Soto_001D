import { Component } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: 'historial.page.html',
  styleUrls: ['historial.page.scss'],
})
export class HistorialPage {
  historialDeViajes: any[] = [
    {
      origen: 'Ciudad A',
      destino: 'Ciudad B',
      fecha: '01/01/2023',
      tiempo: '2 horas',
    },
    {
      origen: 'Ciudad C',
      destino: 'Ciudad D',
      fecha: '02/01/2023',
      tiempo: '3 horas',
    },
    // Agrega más datos ficticios según sea necesario
  ];

  constructor() {}
}