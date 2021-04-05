import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'moderation', //Path specified here will be referenced in the HTML page.
        loadChildren: () => import('../moderation-tab/moderation.module').then(m => m.ModerationPageModule)
      },
      {
        path: 'console',
        loadChildren: () => import('../console-tab/console.module').then(m => m.ConsolePageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings-tab/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/moderation',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/moderation',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
