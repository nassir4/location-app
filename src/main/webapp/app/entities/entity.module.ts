import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'adresse',
        loadChildren: () => import('./adresse/adresse.module').then(m => m.LocationAppAdresseModule),
      },
      {
        path: 'logement',
        loadChildren: () => import('./logement/logement.module').then(m => m.LocationAppLogementModule),
      },
      {
        path: 'paiement',
        loadChildren: () => import('./paiement/paiement.module').then(m => m.LocationAppPaiementModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class LocationAppEntityModule {}
