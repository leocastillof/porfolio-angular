import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Aboutme } from 'src/app/model/aboutme';
import { AboutService } from 'src/app/service/about.service';

@Component({
  selector: 'app-new-aboutme',
  templateUrl: './new-aboutme.component.html',
  styleUrls: ['./new-aboutme.component.css']
})
export class NewAboutmeComponent {
  description: string;

  constructor(private aboutService: AboutService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const about = new Aboutme(this.description);
    this.aboutService.save(about).subscribe(
      data => {
        alert("Descripción creada correctamente");
        window.location.reload();
      }, err =>{
        alert("Ocurrió un error al crear la descripción");
        window.location.reload();
      }
    )
  }
}
