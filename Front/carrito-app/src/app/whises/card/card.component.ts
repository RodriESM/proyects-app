import { CarritoService } from '../../service/carrito.service';
import { Component, Input, OnInit } from '@angular/core';
import { Whis } from '../wish';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() whis: Whis = new Whis();

  constructor(public carritoService:CarritoService) { }

  ngOnInit(): void {
  }

}
