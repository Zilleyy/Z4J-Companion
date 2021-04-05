import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModerationPage } from './moderation.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ModerationPageRoutingModule } from './moderation-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ModerationPageRoutingModule
  ],
  declarations: [ModerationPage]
})
export class ModerationPageModule {}
