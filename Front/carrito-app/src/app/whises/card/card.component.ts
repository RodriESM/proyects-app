import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { Whis } from '../whis';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() whis: Whis = new Whis;

  constructor() { }

  ngOnInit(): void {
  }

}
