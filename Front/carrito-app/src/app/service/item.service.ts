import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  public values: any;

  constructor() { }

  public addNewWhis(): void {
    Swal.fire({
      title: 'Add your new desire to the list',
      width: '18%',
      html: `
      <div class="mb-2">
      <label for="textTittle" class="form-label">Tittle</label>
      <input type="text" id="textTittle" class="form-control" placeholder="Whis tittle...">
      </div>
      <div class="mb-2">
      <label for="textDescription" class="form-label">Description</label>
      <textarea minlength="20" maxlength="50" class="form-control" id="textDescription"></textarea>
      </div>
      <div class="mb-2">
      <label for="uri" class="form-label">URI</label>
      <input type="url" id="uri" class="form-control" placeholder="Whis URI...">
      </div>
      <div class="mb-2">
      <label for="img" class="form-label">Image</label>
      <input type="url" id="img" class="form-control" placeholder="Whis img source...">
      </div>
      `,
      confirmButtonText: 'Add',
      cancelButtonText: 'Cancel',
      cancelButtonColor: 'Red',
      showCancelButton: true,
      focusCancel: false,
      focusConfirm: false,
      preConfirm: () => {
        //TODO Add other values here...
        const tittle = (<HTMLInputElement>Swal!.getPopup()!.querySelector('#textTittle')!).value
        const description = (<HTMLInputElement>Swal!.getPopup()!.querySelector('#textDescription')!).value
        const uri = (<HTMLInputElement>Swal!.getPopup()!.querySelector('#uri')!).value
        const img = (<HTMLInputElement>Swal!.getPopup()!.querySelector('#img')!).value
        if (!tittle || !description) {
          Swal.showValidationMessage(`Please enter tittle and description`)
        }
        return { tittle: tittle, description: description, uri: uri, img: img }
      }
    }).then((result: any) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 10000,
          title: `<a href="${result.value.uri}" target="_blank">${result.value.tittle}</a>`,
          text: result.value.description,
          imageUrl: result.value.img,
          imageWidth: '100%',
          imageHeight: 200,
          imageAlt: result.value.tittle,
        })
      }
    })
  }
}
