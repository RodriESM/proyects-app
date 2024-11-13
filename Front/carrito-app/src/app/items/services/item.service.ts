import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { v4 as uuid } from 'uuid';
import { Whis } from '../interfaces/wish';
import { WHISES_DATA  } from 'src/assets/data/wishes.json'; 'src/assets/data/wishes.json';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  public $whises: BehaviorSubject<Whis[]>;
  public _whises: Whis[];

  constructor() {
    this._whises = JSON.parse(localStorage.getItem('whises') || JSON.stringify(WHISES_DATA));
    this.$whises = new BehaviorSubject<Whis[]>(this._whises);
    localStorage.setItem('whises', JSON.stringify(this._whises));
  }

  public addNewWhis(event: Event): void {
    event.preventDefault();
    Swal.fire({
      title: 'Add your new desire to the list',
      width: '18%',
      html: `
        <div class="mb-2">
          <label for="textTittle" class="form-label">Título</label>
          <input type="text" id="textTittle" class="form-control" placeholder="Mi coche deseado...">
        </div>
        <div class="mb-2">
          <label for="textDescription" class="form-label">Descripción</label>
          <textarea minlength="20" maxlength="50" class="form-control" id="textDescription" placeholder="Es de color negro..."></textarea>
        </div>
        <div class="mb-2">
          <label for="textPrecio" class="form-label">Precio</label>
          <input type="number" id="textPrecio" class="form-control" placeholder="25000...">
        </div>
        <div class="mb-2">
          <label for="uri" class="form-label">URI</label>
          <input type="url" id="uri" class="form-control" placeholder="Dirección URL...">
        </div>
        <div class="mb-2">
          <label for="img" class="form-label">Imagen</label>
          <input type="url" id="img" class="form-control" placeholder="Origen de la imagen...">
        </div>
      `,
      confirmButtonText: 'Add',
      cancelButtonText: 'Cancel',
      cancelButtonColor: 'Red',
      showCancelButton: true,
      focusCancel: false,
      focusConfirm: false,
      preConfirm: () => {
        const tittle = (Swal.getPopup()?.querySelector('#textTittle') as HTMLInputElement).value || "";
        const description = (Swal.getPopup()?.querySelector('#textDescription') as HTMLInputElement).value || "";
        const precio = Number.parseFloat((Swal.getPopup()?.querySelector('#textPrecio') as HTMLInputElement).value) || 0;
        const uri = (Swal.getPopup()?.querySelector('#uri') as HTMLInputElement).value || "";
        const img = (Swal.getPopup()?.querySelector('#img') as HTMLInputElement).value || "";

        if (!tittle) {
          Swal.showValidationMessage('Please enter title');
          return;
        }
        if (!description) {
          Swal.showValidationMessage('Please enter description');
          return;
        }
        if (!precio) {
          Swal.showValidationMessage('Please enter a price');
          return;
        }

        this.createWhis(tittle, description, precio, uri, img);
        return { tittle, description, uri, img };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 3000,
          title: `<a href="${result.value?.uri}" target="_blank">${result.value?.tittle}</a>`,
          text: result.value?.description,
          imageUrl: result.value?.img,
          imageWidth: '100%',
          imageHeight: 200,
          imageAlt: result.value?.tittle,
        });
      }
    });
  }

  private createWhis(tittle: string, description: string, precio: number, uri: string, img: string): void {
    const acceptedWhis: Whis = {
      id: uuid(),
      titulo: tittle,
      description: description,
      web: uri,
      precio: precio,
      comprado: false,
      cantidad: 1,
      imagen: img,
      estrellas: '../assets/img/estrellas.png'
    };

    this._whises.push(acceptedWhis);
    this.$whises.next(this._whises);
    localStorage.setItem('whises', JSON.stringify(this._whises));
  }
}
