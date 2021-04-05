import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConsolePage } from './console.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ConsolePageRoutingModule } from './console-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ConsolePageRoutingModule
  ],
  declarations: [ConsolePage]
})
export class ConsolePageModule {}
