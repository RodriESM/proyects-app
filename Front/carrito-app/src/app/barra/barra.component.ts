import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  private nCursos: Number = 20000;

  constructor() { }

  ngOnInit(): void {
  }

  public getCursos(): string{
    return this.nCursos.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

}
