import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() curso: Curso = new Curso;

  constructor() { }

  ngOnInit(): void {
  }

}
