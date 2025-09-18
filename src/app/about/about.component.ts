import { Component } from '@angular/core';
import { Tecnologies } from '../tecnologies/tecnologies';
import { TecnologiesService } from '../tecnologies/tecnologies.service';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  tecnologias: {name: string; img: SafeHtml;}[] = [];

  constructor(private tecnologiesService: TecnologiesService, private sanitizer: DomSanitizer) {
    
  }

  ngOnInit() {
    const data = this.tecnologiesService.obtenerTecnologias();
    this.tecnologias = data.map(tech => ({
      name: tech.name,
      img: this.sanitizer.bypassSecurityTrustHtml(tech.img)
    }))
    console.log(this.tecnologias);
  }
}
