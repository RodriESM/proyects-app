import { ItemService } from '../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public autor: String = "Rodrigo Martínez Le Pera";
  public faCirclePlus: any = faCirclePlus;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  public addNewWhis(): void{
    this.itemService.addNewWhis();
  }
}
