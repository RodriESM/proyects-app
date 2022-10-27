import { Component, OnInit } from '@angular/core';
import { Whis } from './wish';
import { WHISES_DATA } from './wishes.json';

@Component({
  selector: 'app-cursos',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.css']
})
export class CursosComponent implements OnInit {

  public whises: Whis[] = [];

  public page: number = 1;
  public count: number = 0;
  public tableSize: number = 12;

  public contador: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.whises = this.getWhises();
  }

  getWhises(): Whis[]{
    return WHISES_DATA;
  }

  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
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
