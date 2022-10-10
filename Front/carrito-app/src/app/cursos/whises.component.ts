import { Component, Input, OnInit, Output } from '@angular/core';
import { Whis } from './whis';
import { WHISES_DATA } from './whises.json';

@Component({
  selector: 'app-cursos',
  templateUrl: './whises.component.html',
  styleUrls: ['./whises.component.css']
})
export class CursosComponent implements OnInit {

  public whises: Whis[] = [];

  public pageOfItems: Array<Whis> = new Array();

  public contador: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.whises = this.getWhises();
  }

  getWhises(): Whis[]{
    return WHISES_DATA;
  }

  onChangePage(pageOfItems: Array<any>){
    this.pageOfItems = pageOfItems;
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
