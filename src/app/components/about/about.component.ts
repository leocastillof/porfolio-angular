import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  title = 'porfolio';
  constructor() { }

  ngOnInit() {
    this.registerMouseMoveEvent();
  }

  registerMouseMoveEvent() {
    // Mouse Trails
    const section_home = document.querySelector('.section-about') as HTMLElement; // Anotación de tipo explícita para section_home
  
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
