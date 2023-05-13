import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
  contact: Contact[] = [];
  person: Person = null;
  isLogged = false;

  constructor(private router: Router, private tokenService: TokenService, private contactService: ContactService,
    private personService: PersonService) {}

  ngOnInit(): void
  {
    this.loadPerson();
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

  loadPerson(): void{
    this.personService.detail(1).subscribe(
      data =>{
        this.person = data;
      }
    )
  }
  
  
  onLogOut(): void {
    this.tokenService.logout();
    window.location.reload();
  }

  login()
  {
    this.router.navigate(['/login']);
  }

}
