import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {appRoutes} from './app-routes';

const routes: Routes = [
  {
    path: appRoutes.main.path, loadChildren: () => import ('./pages/main/main.module').then(m => m.MainModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
