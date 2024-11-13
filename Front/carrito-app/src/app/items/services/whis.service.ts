import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Whis } from '../interfaces/wish';

@Injectable({
  providedIn: 'root'
})
export class WhisService {

  private whisItems: Array<Whis>;
  private total: BehaviorSubject<number>;

  constructor() {
    this.whisItems = [];
    this.total = new BehaviorSubject<number>(0);

    // Inicializa `whisItems` desde `localStorage` si existe
    const storedWhisItems = localStorage.getItem('whis');
    if (storedWhisItems) {
      this.whisItems = JSON.parse(storedWhisItems);
      this.calculateTotal(); // Calcula el total al cargar los datos
    } else {
      localStorage.setItem('whis', JSON.stringify(this.whisItems));
    }
  }

  public getItems(): Whis[] {
    return [...this.whisItems];
  }

  public getTotal(): Observable<number> {
    return this.total.asObservable();
  }

  public addItem(whis: Whis): void {
    const existingItem = this.whisItems.find(item => item.id === whis.id);

    if (existingItem) {
      existingItem.cantidad++;
    } else {
      whis.cantidad = 1;
      this.whisItems.push(whis);
    }

    this.updateStorageAndTotal();
  }

  public delete(whis: Whis): void {
    const itemIndex = this.whisItems.findIndex(item => item.id === whis.id);

    if (itemIndex > -1) {
      const item = this.whisItems[itemIndex];
      if (item.cantidad > 1) {
        item.cantidad--;
      } else {
        this.whisItems.splice(itemIndex, 1);
      }
      this.updateStorageAndTotal();
    }
  }

  public cleanwhis(): void {
    this.whisItems = [];
    localStorage.setItem('whis', JSON.stringify(this.whisItems));
    this.total.next(0);
  }

  // Método para actualizar `localStorage` y recalcular el total
  private updateStorageAndTotal(): void {
    localStorage.setItem('whis', JSON.stringify(this.whisItems));
    this.calculateTotal();
  }

  // Método para calcular el total basado en los items actuales
  private calculateTotal(): void {
    const total = this.whisItems.reduce((sum, item) => sum + (item.cantidad * item.precio), 0);
    this.total.next(total);
  }
}
