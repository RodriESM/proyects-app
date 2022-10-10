import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from "@angular/material/icon";

import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BarraComponent } from './barra/barra.component';
import { CursosComponent } from './cursos/whises.component';
import { CardComponent } from './cursos/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    BarraComponent,
    CursosComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }