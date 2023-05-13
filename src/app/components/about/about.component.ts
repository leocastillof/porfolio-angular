import { Component, OnInit } from '@angular/core';
import { person } from 'src/app/model/person.module';
import { EducationService } from 'src/app/service/education.service';
import { Education } from 'src/app/model/education';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';
import { Aboutme } from 'src/app/model/aboutme';
import { AboutService } from 'src/app/service/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  person: person = null;
  aboutme: Aboutme[] = [];
  education: Education[] = [];
  title = 'porfolio';

  constructor(private aboutmeService: AboutService, public personService: PersonService, private educationS: EducationService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.personService.getPerson().subscribe(data => {this.person = data});
    this.loadEducation();
    this.loadAboutMe();
    if(this.tokenService.getToken())
    {
      this.isLogged = true;
    }
    else
    {
      this.isLogged = false;
    }
  }

  loadEducation(): void{
    this.educationS.lista().subscribe(
      data =>{
        this.education = data;
      }
    )
  }

  loadAboutMe(): void{
    this.aboutmeService.lista().subscribe(
      data =>{
        this.aboutme = data;
      }
    )
  }


  delete(id?: number){
    if(id != undefined)
    {
      this.educationS.delete(id).subscribe(
        data => {
          this.loadEducation();
        }, err => {
          alert("No se pudo eliminar")
        }
      )
    }
  }

  deleteAboutMe(id?: number){
    if(id != undefined)
    {
      this.aboutmeService.delete(id).subscribe(
        data => {
          this.loadAboutMe();
        }, err => {
          alert("No se pudo eliminar")
        }
      )
    }
  }


}
