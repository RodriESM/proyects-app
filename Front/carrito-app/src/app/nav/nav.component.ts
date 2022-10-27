import { CarritoService } from './../carrito.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public img: string = '/assets/img/logo.jpg';
  constructor(public carritoService: CarritoService) { }

  ngOnInit(): void {
  }

}
