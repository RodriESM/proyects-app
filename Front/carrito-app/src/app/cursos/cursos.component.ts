import { Component, Input, OnInit, Output } from '@angular/core';
import { Curso } from './curso';
import { CURSOS_DATA } from './cursos.json';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  @Output()
  public cursos: Curso[] = [];

  public contador: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.cursos = this.getCursos();
  }

  getCursos(): Curso[]{
    return CURSOS_DATA;
  }

  isMultiplo(): boolean{
    if(this.contador % 3 === 0){
      this.contador++;
      return true;
    }else{
      this.contador++;
      return false;
    }
  }

}
