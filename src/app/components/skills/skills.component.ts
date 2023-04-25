import { Component } from '@angular/core';

declare var TagCanvas: any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  title = 'porfolio';

  constructor() { }

  ngOnInit() {
    this.registerMouseMoveEvent();
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
