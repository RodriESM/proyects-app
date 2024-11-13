import { Component, OnInit } from '@angular/core';
import { Whis } from 'src/app/items/interfaces/wish';
import { WhisService } from 'src/app/items/services/whis.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public img: string = '/assets/img/logo.jpg';
  public total: number = 0;

  constructor(private wishService: WhisService) { }

  ngOnInit(): void {
    this.wishService.getTotal().subscribe(total => {
      this.total = total;
    })
  }

  getItems(): Whis[]{
    return this.wishService.getItems();
  }

  delete(whis: Whis): void{
    this.wishService.delete(whis);
  }

  clean(): void{
    this.wishService.cleanwhis();
  }
}
