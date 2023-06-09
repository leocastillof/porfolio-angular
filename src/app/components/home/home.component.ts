import { Component, OnInit } from '@angular/core';
import { Aboutme } from 'src/app/model/aboutme';
import { AboutService } from 'src/app/service/about.service';
import { TokenService } from 'src/app/service/token.service';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/service/person.service';
import { MusicService } from 'src/app/service/music.service';

declare var TagCanvas: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  template: `
    <button (click)="soundOn()">Turn on sound</button>
    <button (click)="soundOff()">Turn off sound</button>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  person: Person = null;
  
  contact: Contact[] = [];
  aboutme: Aboutme[] = [];
  title = 'porfolio';

  constructor(private aboutmeService: AboutService, private tokenService: TokenService, private contactService: ContactService,
    private personService: PersonService,
    private musicService: MusicService) { }
  isLogged = false;

  soundOn() {
    this.musicService.soundTrack('on');
  }

  soundOff() {
    this.musicService.soundTrack('off');
  }


  ngOnInit() : void {
    this.loadPerson();
    this.registerMouseMoveEvent();
    this.loadAboutMe();
    this.loadContact();
    if(this.tokenService.getToken())
    {
      this.isLogged = true;
    }
    else
    {
      this.isLogged = false;
    }
    
  }
    

  loadPerson(): void{
    this.personService.detail(1).subscribe(
      data =>{
        this.person = data;
      }
    )
  }


  loadAboutMe(): void{
    this.aboutmeService.lista().subscribe(
      data =>{
        this.aboutme = data;
      }
    )
  }

  loadContact(): void{
    this.contactService.lista().subscribe(
      data =>{
        this.contact = data;
      }
    )
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
