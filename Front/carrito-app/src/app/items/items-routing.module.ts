import { WhisesComponent } from './pages/whises/wishes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';

const routes: Routes = [
  {
    path: '',
    // Es importante indicar el home para el router-component y mostrar todas las rutas hijas
    component: HomeComponent,
    children: [
      {
        path: 'listado',
        component: WhisesComponent
      },
      {
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class ItemsRoutingModule { }
