import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';
import { person } from 'src/app/model/person.module';
import { TokenService } from 'src/app/service/token.service';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  person: person = null;
  contact: Contact[] = [];
  title = 'porfolio';

  constructor(public personService: PersonService, private contactService: ContactService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.personService.getPerson().subscribe(data => {this.person = data});
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
