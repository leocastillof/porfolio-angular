import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent {
  description: string;
  facebook: string;
  twitter: string;
  google: string;
  linkedin: string;
  instagram: string;
  whatsapp: string;

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const contact = new Contact(this.description, this.facebook, this.twitter, this.google,
      this.linkedin, this.instagram, this.whatsapp);
    this.contactService.save(contact).subscribe(
      data => {
        alert("Contacto creada correctamente");
        window.location.reload();
      }, err =>{
        alert("Ocurrió un error al crear el contacto");
        window.location.reload();
      }
    )
  }
}
