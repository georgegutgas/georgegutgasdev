import { Component, inject } from '@angular/core';
import { Portfolio } from './portfolio';
import { PortfolioService } from './portfolio.service';
import { FooterComponent } from "../footer/footer.component";
import { Router, RouterLink } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [FooterComponent, RouterLink, CommonModule, NgOptimizedImage],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  portfolios: Portfolio[] = [];

  private enrutador = inject(Router);

  constructor(private portfolioService: PortfolioService){}

  ngOnInit() {
    this.portfolios = this.portfolioService.obtenerPortfolios();
  }

  portfolioDetail(name: string) {
    this.enrutador.navigate(['portfolio', name]);
  }
}
