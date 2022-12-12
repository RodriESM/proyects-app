import { Whis } from 'src/app/interfaces/wish';
import { CarService } from '../../services/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public img: string = '/assets/img/logo.jpg';
  public total: number = 0;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getTotal().subscribe(total => {
      this.total = total;
    })
  }

  getItems(): Whis[]{
    return this.carService.getItems();
  }

  delete(whis: Whis): void{
    this.carService.delete(whis);
  }

  clean(): void{
    this.carService.cleanCar();
  }
}
