import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducationService } from 'src/app/service/education.service';
import { Education } from 'src/app/model/education';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit{
  education: Education = null;

  constructor(private educationS: EducationService, private activatedRouter: ActivatedRoute,
    private router: Router) {}

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.educationS.detail(id).subscribe(
        data => {
          this.education = data;
        }, err =>{
          alert("Error al modificar educación");
          window.location.reload();
        }
      )
    }

    onUpdate(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.educationS.update(id, this.education).subscribe(
        data => {
          window.location.reload();
        }, err =>{
          alert("Error al modificar educación");
          window.location.reload();
        }
      )
    }

}
