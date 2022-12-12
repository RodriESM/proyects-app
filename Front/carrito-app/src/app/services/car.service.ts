import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Whis } from '../interfaces/wish';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carItems: Array<Whis>;
  private total: BehaviorSubject<number>;

  constructor() {
    this.carItems = [];
    this.total = new BehaviorSubject<number>(0);
    if(localStorage.getItem('car')) {
      this.carItems = JSON.parse(localStorage.getItem('car')!);
    }else{
      localStorage.setItem('car', JSON.stringify(this.carItems));
    }
   }

  public getItems(): Whis[]{
    return [...this.carItems];
  }

  public getTotal(): Observable<number>{
    let tempTotal: number = 0;
    this.carItems.forEach(item => {
      tempTotal = tempTotal + (item.cantidad * item.precio);
    });
    this.total.next(tempTotal);
    return this.total.asObservable();
  }

  public addItem(whis: Whis): void {
    if(this.carItems.includes(whis)) {
      whis.cantidad++;
      this.total.next(this.total.value + whis.precio);
    }else{
      this.carItems.push(whis);
      this.total.next(this.total.value + whis.precio);
    }
    localStorage.setItem('car', JSON.stringify(this.carItems));
  }

  public delete(whis:Whis): void {
    if(this.carItems.includes(whis)) {
      if(whis.cantidad >= 2) {
        this.carItems.filter(item => item.id == whis.id).forEach(item => item.cantidad--);
        this.total.next(this.total.value - whis.precio);
      }else {
        this.carItems.splice(this.carItems.indexOf(whis),1);
        this.total.next(this.total.value - whis.precio);
      }

      localStorage.setItem('car', JSON.stringify(this.carItems));
    }
  }

  public cleanCar(): void {
    this.carItems.forEach(item => item.cantidad = 1)
    this.carItems = [];
    localStorage.setItem('car', JSON.stringify(this.carItems));
    this.total.next(0);
  }
}
