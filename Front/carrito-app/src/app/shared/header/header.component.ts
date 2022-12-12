import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public aprender: string = "¿Quieres cumplir algún deseo?";
  public quote: string = "Todos deseos te esperan";
  public placeHolderValue: string = "¿Qué te gustaría comprar?";

  constructor() { }

  ngOnInit(): void {
  }

}
