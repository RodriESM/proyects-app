import { BehaviorSubject, Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Whis } from '../../interfaces/wish';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-whises',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.css']
})
export class WhisesComponent{

  public _whises: Whis[] = [];

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

    this.itemService.$whises.subscribe(whises => {
      this._whises = [...whises];
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
