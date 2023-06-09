import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { Skill } from 'src/app/model/skill';
import { ServiceExperience } from 'src/app/service/service-experience.service';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

declare var TagCanvas: any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skill: Skill[] = [];
  exp: Experience[] = [];
  title = 'porfolio';

  constructor(private skillService: SkillService, private serviceExperience: ServiceExperience, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.registerMouseMoveEvent();
    this.loadExperience();
    this.loadSkills();
    if(this.tokenService.getToken())
    {
      this.isLogged = true;
    }
    else
    {
      this.isLogged = false;
    } 
  }

  loadExperience(): void
  {
    this.serviceExperience.list().subscribe(data => {this.exp = data;})
  }

  loadSkills(): void{
    this.skillService.list().subscribe(data => {this.skill = data;})
  }

  deleteExp(id?: number){
    if(id != undefined)
    {
      this.serviceExperience.delete(id).subscribe(
        data => {
          this.loadExperience();
        }, err => {
          alert("No se pudo eliminar la experiencia");
        }
      )
    }
  }

  deleteSkill(id?: number){
    if(id != undefined)
    {
      this.skillService.delete(id).subscribe(
        data => {
          this.loadSkills();
        }, err => {
          alert("No se pudo borrar la habilidad");
        }
      )
    }
  }

  ngAfterViewInit() {
    let canvas = document.getElementById('myCanvas');
    let tags = document.getElementById('tags');

    if (canvas && tags) {
      TagCanvas.Start('myCanvas', 'tags', {
        textColour: '#08fdd8',
        outlineColour: 'transparent',
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
      });
    }
  }

  registerMouseMoveEvent() {
    // Mouse Trails
    const section_home = document.querySelector('.section-home') as HTMLElement; // Anotación de tipo explícita para section_home
  
    interface Dot {
      x: number;
      y: number;
      node: HTMLDivElement; // Anotación de tipo explícita para node
      draw(): void; // Anotación de tipo explícita para el método draw
    }
  
    let dots: Dot[] = []; // Anotación de tipo explícita para dots
    let mouse = { x: 0, y: 0 };
  
    class DotClass implements Dot { // Utilizando una clase para definir Dot
      x = 0;
      y = 0;
      node = (() => {
        const n = document.createElement("div");
        n.className = "trail";
        document.body.appendChild(n);
        return n;
      })();
  
      draw() {
        this.node.style.left = this.x + "px";
        this.node.style.top = this.y + "px";
      }
    }
  
    for (let i = 0; i < 12; i++) {
      const d = new DotClass();
      dots.push(d);
    }
  
    function draw() {
      var x = mouse.x,
        y = mouse.y;
  
      dots.forEach(function (dot, index, dots) {
        var nextDot = dots[index + 1] || dots[0];
  
        dot.x = x;
        dot.y = y;
        dot.draw();
        x += (nextDot.x - dot.x) * 0.6;
        y += (nextDot.y - dot.y) * 0.6;
      });
    }
  
    if (section_home) {
      section_home.addEventListener("mousemove", function (event) {
        mouse.x = event.pageX;
        mouse.y = event.pageY;
        // Haz algo con las coordenadas del mouse
      });
    }
  
    function animate() {
      draw();
      requestAnimationFrame(animate);
    }
  
    animate();
  }
}
