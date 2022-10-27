import { Whis } from './whises/wish';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  public articulosCarrito:Array<Whis> = [];
  public total: number = 0;

  constructor() { }

  public vaciarCarrito(): void {
    this.articulosCarrito.forEach(item => item.cantidad = 1)
    this.articulosCarrito = [];
  }

  public agregarAlCarrito(whis:Whis): void {
    if(this.articulosCarrito.includes(whis)){
      whis.cantidad++;
    }else{
      this.articulosCarrito.push(whis);
      this.total = this.total + whis.precio;
    }
  }

  public eliminarDelCarrito(whis:Whis): void {
    if(this.articulosCarrito.includes(whis)){
    this.articulosCarrito.forEach(item => item.cantidad = 1);
    this.total = this.total - whis.precio;
    this.articulosCarrito.splice(this.articulosCarrito.indexOf(whis));
    }
  }

}
