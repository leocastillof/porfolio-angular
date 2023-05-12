import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit{
  nameE: string;
  descriptionE: string;

  constructor(private educationS: EducationService, private router: Router) {}

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const education = new Education(this.nameE, this.descriptionE);
    this.educationS.save(education).subscribe(
      data => {
        alert("Educación añadida correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Ocurrió un error al añadir la educación");
        this.router.navigate(['']);
      }
    )
  }
}
