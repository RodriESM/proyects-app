import { Component, OnInit } from '@angular/core';
import { Whis } from 'src/app/interfaces/wish';
import { WHISES_DATA } from 'src/assets/data/wishes.json';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

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
