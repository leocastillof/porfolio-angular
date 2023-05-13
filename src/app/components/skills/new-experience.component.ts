import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ServiceExperience } from 'src/app/service/service-experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit{
  nameE: string  = '';
  descriptionE: string  = '';

  constructor(private serviceExperience: ServiceExperience, private router: Router) {}


  ngOnInit(): void {
    
  }

  onCreate(): void {
    const exp = new Experience(this.nameE, this.descriptionE);
    this.serviceExperience.save(exp).subscribe(
      data => {
        alert("Experiencia agregada exitosamente");
        window.location.reload();
      }, err => {
        alert("Ocurrió un error");
        window.location.reload();
      }
    )
  }

}
