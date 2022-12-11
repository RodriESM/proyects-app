import { BehaviorSubject, Observable, of } from 'rxjs';
import { ItemService } from './../service/item.service';
import { Component, OnInit } from '@angular/core';
import { Whis } from './wish';
import { WHISES_DATA } from './wishes.json';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-whises',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.css']
})
export class CursosComponent{

  public whises: Whis[] = [];

  public page: number = 1;
  public count: number = 0;
  public tableSize: number = 12;

  public _isMultiplo = new BehaviorSubject(false);
  public isMultiplo = false;


  constructor(private itemService: ItemService) {}

   ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._isMultiplo.subscribe();

    if(!localStorage.getItem('whises')){
      localStorage.setItem('whises', JSON.stringify(WHISES_DATA));
      this.itemService._whises.next([...WHISES_DATA]);
    }else{
      this.itemService._whises.next([...JSON.parse(localStorage.getItem('whises')!)] || []);
    }

    this.itemService._whises.subscribe(whises => {
      this.whises = whises;
    });
   }

  onTableDataChange(event: any) {
    this.page = event;
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }

  checkNumberOfPages(): Observable<boolean>{
    if(this.count % 3 === 0){
      this.count++;
      this._isMultiplo.next(true);
      return this._isMultiplo.asObservable();
    }else{
      this._isMultiplo.next(false);
      this.count++;
      return this._isMultiplo.asObservable();
    }
  }

}
