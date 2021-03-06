import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsolePage } from './console.page';

const routes: Routes = [
  {
    path: '',
    component: ConsolePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsolePageRoutingModule {}
