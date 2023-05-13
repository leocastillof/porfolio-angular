import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent {
  name: string;
  percentage: number;

  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.name, this.percentage);
    this.skillService.save(skill).subscribe(
      data => {
        alert("Habilidad creada correctamente");
        window.location.reload();
      }, err =>{
        alert("Ocurrió un error al crear la habilidad");
        window.location.reload();
      }
    )
  }
}
