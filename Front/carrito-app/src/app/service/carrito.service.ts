import { Whis } from '../whises/wish';
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
    this.total = 0;
  }

  public agregarAlCarrito(whis:Whis): void {
    if(this.articulosCarrito.includes(whis)){
      whis.cantidad++;
      this.total = this.total + whis.precio;
    }else{
      this.articulosCarrito.push(whis);
      this.total = this.total + whis.precio;
    }
  }

  public eliminarDelCarrito(whis:Whis): void {
    if(this.articulosCarrito.includes(whis)){
    if(whis.cantidad >= 2){
      this.articulosCarrito.filter(item => item.id == whis.id).forEach(item => item.cantidad--);
      this.total = this.total - whis.precio;
    }else{
      this.articulosCarrito.splice(this.articulosCarrito.indexOf(whis),1);
      this.total = this.total - whis.precio;
    }
    }
  }

}
