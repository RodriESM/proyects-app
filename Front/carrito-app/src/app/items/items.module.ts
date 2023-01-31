import { MaterialModule } from './../material/material.module';
import { ItemsRoutingModule } from './items-routing.module';
import { CardComponent } from './components/card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home/home.component';
import { WhisesComponent } from './pages/whises/wishes.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PrimengModule } from '../primeng/primeng.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CardComponent,
    HomeComponent,
    WhisesComponent,
  ],
  imports: [
    CommonModule,
    // Importante añadirlo si queremos que nos rediriga aquí
    ItemsRoutingModule,
    NgxPaginationModule,
    MaterialModule,
    PrimengModule
  ]
})
export class ItemsModule { }
