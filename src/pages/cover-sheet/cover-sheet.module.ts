import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoverSheetPage } from './cover-sheet';

@NgModule({
  declarations: [
    CoverSheetPage,
  ],
  imports: [
    IonicPageModule.forChild(CoverSheetPage),
  ],
})
export class CoverSheetPageModule {}
