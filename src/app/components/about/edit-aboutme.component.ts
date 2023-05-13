import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aboutme } from 'src/app/model/aboutme';
import { AboutService } from 'src/app/service/about.service';

@Component({
  selector: 'app-edit-aboutme',
  templateUrl: './edit-aboutme.component.html',
  styleUrls: ['./edit-aboutme.component.css']
})
export class EditAboutmeComponent {
  about: Aboutme = null;

  constructor(private serviceAbout: AboutService, private activatedRouter: ActivatedRoute,
    private router: Router) {}

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.serviceAbout.detail(id).subscribe(
        data => {
          this.about = data;
        }, err =>{
          alert("Error al modificar experiencia");
          window.location.reload();
        }
      )
    }

    onUpdate(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.serviceAbout.update(id, this.about).subscribe(
        data => {
          window.location.reload();
        }, err =>{
          alert("Error al modificar experiencia");
          window.location.reload();
        }
      )
    }
}
