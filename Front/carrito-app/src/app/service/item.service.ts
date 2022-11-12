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
      width: '15%',
      html: `
      <div class="mb-2">
      <label for="textTittle" class="form-label">Tittle</label>
      <input type="text" id="textTittle" class="form-control" placeholder="Whis tittle...">
      </div>
      <div class="mb-2">
      <label for="textDescription" class="form-label">Description</label>
      <input type="textarea" id="textDescription" class="form-control" placeholder="Whis description...">
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
        if (!tittle || !description) {
          Swal.showValidationMessage(`Please enter tittle and description`)
        }
        return { tittle: tittle, description: description }
      }
    }).then((result: any) => {
        //TODO Add new item to the list...
      Swal.fire(`
        Tittle: ${result.value.tittle}
        Description: ${result.value.description}
      `.trim())
    })
  }
}
