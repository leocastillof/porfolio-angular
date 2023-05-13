import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {
  contact: Contact = null;

  constructor(private contactS: ContactService, private activatedRouter: ActivatedRoute,
    private router: Router) {}

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.contactS.detail(id).subscribe(
        data => {
          this.contact = data;
        }, err =>{
          alert("Error al modificar contacto");
          window.location.reload();
        }
      )
    }

    onUpdate(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.contactS.update(id, this.contact).subscribe(
        data => {
          window.location.reload();
        }, err =>{
          alert("Error al modificar contacto");
          window.location.reload();
        }
      )
    }
}
