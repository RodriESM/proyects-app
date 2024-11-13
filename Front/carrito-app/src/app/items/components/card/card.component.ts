import { Component, Input, OnInit, Output } from '@angular/core';
import { Whis } from 'src/app/items/interfaces/wish';
import { WhisService } from 'src/app/items/services/whis.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() whis: Whis = new Whis();

  constructor(public whisService: WhisService) { }

  ngOnInit(): void {
  }

}
