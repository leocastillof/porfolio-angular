import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
  contact: Contact[] = [];
  isLogged = false;

  constructor(private router: Router, private tokenService: TokenService, private contactService: ContactService,) {}

  ngOnInit(): void
  {
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
  
  onLogOut(): void {
    this.tokenService.logout();
    window.location.reload();
  }

  login()
  {
    this.router.navigate(['/login']);
  }

}
