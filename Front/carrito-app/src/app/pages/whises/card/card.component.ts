import { Component, Input, OnInit, Output } from '@angular/core';
import { Whis } from 'src/app/interfaces/wish';
import { CarritoService } from 'src/app/services/carrito.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() whis: Whis = new Whis();

  constructor(public carritoService: CarritoService) { }

  ngOnInit(): void {
  }

}
