import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';
import { TokenService } from 'src/app/service/token.service';
import { PersonService } from 'src/app/service/person.service';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  Person: Person = null;
  contact: Contact[] = [];
  title = 'porfolio';

  constructor(public personService: PersonService, private contactService: ContactService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.loadContact();
    if(this.tokenService.getToken())
    {
      this.isLogged = true;
    }
    else
    {
      this.isLogged = false;
    }
  }

  loadContact(): void{
    this.contactService.lista().subscribe(
      data =>{
        this.contact = data;
      }
    )
  }

  deleteContact(id?: number){
    if(id != undefined)
    {
      this.contactService.delete(id).subscribe(
        data => {
          this.loadContact();
        }, err => {
          alert("No se pudo eliminar")
        }
      )
    }
  }
}
