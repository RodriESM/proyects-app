import { Component, OnInit } from '@angular/core';
import { Whis } from '../whises/wish';
import { WHISES_DATA } from '../whises/wishes.json';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  private nWhises: Number = 0;

  public whises: Whis[] = [];

  constructor() { }



  ngOnInit(): void {
    this.nWhises = WHISES_DATA.length
  }

  public getWhises(): string{
    return this.nWhises.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

}
