import { ItemsModule } from './items/items.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error/error-page.component';

const routes: Routes = [
  {
    path: 'auth',
    // Fijarse que es es el auth.module y no el routing.
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'home',
    // Fijarse que es es el auth.module y no el routing.
    loadChildren: () => import('./items/items.module').then( m => m.ItemsModule)
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    //component: ErrorPageComponent
    redirectTo: '404'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
