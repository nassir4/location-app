import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LocationAppSharedModule } from 'app/shared/shared.module';
import { LogementComponent } from './logement.component';
import { LogementDetailComponent } from './logement-detail.component';
import { LogementUpdateComponent } from './logement-update.component';
import { LogementDeleteDialogComponent } from './logement-delete-dialog.component';
import { logementRoute } from './logement.route';

@NgModule({
  imports: [LocationAppSharedModule, RouterModule.forChild(logementRoute)],
  declarations: [LogementComponent, LogementDetailComponent, LogementUpdateComponent, LogementDeleteDialogComponent],
  entryComponents: [LogementDeleteDialogComponent],
})
export class LocationAppLogementModule {}
