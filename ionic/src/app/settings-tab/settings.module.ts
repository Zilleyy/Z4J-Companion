import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsPage } from './settings.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SettingsPageRoutingModule } from './settings-routing.module';
import {ConsolePageModule} from "../console-tab/console.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{path: '', component: SettingsPage}]),
    SettingsPageRoutingModule,
    ConsolePageModule,
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
