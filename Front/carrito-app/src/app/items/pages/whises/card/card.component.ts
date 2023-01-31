import { Component, Input, OnInit, Output } from '@angular/core';
import { Whis } from 'src/app/items/interfaces/wish';
import { CarService } from 'src/app/items/services/car.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() whis: Whis = new Whis();

  constructor(public carService: CarService) { }

  ngOnInit(): void {
  }

}
