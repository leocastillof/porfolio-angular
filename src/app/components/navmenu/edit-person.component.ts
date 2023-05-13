import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { ImageService } from 'src/app/service/image.service';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  person: Person = null;

  constructor(private personService: PersonService, private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
      this.personService.detail(id).subscribe(
        data => {
          this.person = data;
        }, err =>{
          alert("Error al modificar la persona");
          window.location.reload();
        }
      )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.person.img = this.imageService.url
    this.personService.update(id, this.person).subscribe(
      data => {
        window.location.reload();
      }, err =>{
        alert("Error al modificar la persona");
        window.location.reload();
      }
    )
  }

  uploadImage($event:any)
  {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "profile_" + id;
    this.imageService.uploadImage($event, name);
  }
}
