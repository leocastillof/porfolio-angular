import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';
import { TokenService } from 'src/app/service/token.service';
import { person } from 'src/app/model/person.module';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contact: Contact[] = [];
  person: person = new person("", "", "");
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
}
