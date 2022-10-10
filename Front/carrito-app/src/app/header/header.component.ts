import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public aprender: string = "Aprendre algo nuevo cada día";
  public precio: string = "Todos los cursos a 15€";
  public placeHolderValue: string = "¿Qué te gustaría comprar?";

  constructor() { }

  ngOnInit(): void {
  }

}
