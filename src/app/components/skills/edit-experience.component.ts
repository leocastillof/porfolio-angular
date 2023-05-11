import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ServiceExperience } from 'src/app/service/service-experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit{
  exp: Experience = null;

  constructor(private serviceExperience: ServiceExperience, private activatedRouter: ActivatedRoute,
    private router: Router) {}

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.serviceExperience.detail(id).subscribe(
        data => {
          this.exp = data;
        }, err =>{
          alert("Error al modificar experiencia");
          this.router.navigate(['']);
        }
      )
    }

    onUpdate(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.serviceExperience.update(id, this.exp).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
          alert("Error al modificar experiencia");
          this.router.navigate(['']);
        }
      )
    }

}
