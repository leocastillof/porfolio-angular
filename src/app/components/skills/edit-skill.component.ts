import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent {
  skill: Skill = null;
  currentUrl = this.router.url;

  constructor(private skillService: SkillService, private activatedRouter: ActivatedRoute,
    private router: Router) {}

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.skillService.detail(id).subscribe(
        data => {
          this.skill = data;
        }, err =>{
          alert("Error al modificar la habilidad");
          window.location.reload();
        }
      )
    }

    onUpdate(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.skillService.update(id, this.skill).subscribe(
        data => {
          window.location.href = 'skills';
        }, err =>{
          alert("Error al modificar la habilidad");
          window.location.reload();
        }
      )
    }

}
