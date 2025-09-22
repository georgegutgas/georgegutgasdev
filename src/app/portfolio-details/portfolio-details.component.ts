import { Component, inject } from '@angular/core';
import { PortfolioService } from '../portfolio/portfolio.service';
import { TecnologiesService } from '../tecnologies/tecnologies.service';
import { Tecnologies } from '../tecnologies/tecnologies';
import { Portfolio } from '../portfolio/portfolio';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-portfolio-details',
  imports: [FooterComponent],
  templateUrl: './portfolio-details.component.html',
  styleUrl: './portfolio-details.component.css'
})
export class PortfolioDetailsComponent {
  portfolios: Portfolio[] = [];
  portfolio!: any;
  tecnologias!: any;
  name!: string;

  private ruta = inject(ActivatedRoute);

  constructor(
    private portfolioService: PortfolioService, 
    private tecnologiesService: TecnologiesService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(){
    // this.portfolios = this.portfolioService.obtenerPortfolios();
    // const resultado = this.tecnologiesService.buscarPorNombre('HTML');
    // console.log(resultado);
    this.name = this.ruta.snapshot.params['name'];
    this.portfolio = this.portfolioService.obtenerPortfolioDetalle(this.name);
  }

  buscarTecnologia(tecnologia: string) {
    const img = this.tecnologiesService.buscarPorNombre(tecnologia);
    return this.sanitizer.bypassSecurityTrustHtml(img!.img)
  }

}
