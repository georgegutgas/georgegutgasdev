import { Component } from '@angular/core';
import { Portfolio } from './portfolio';
import { PortfolioService } from './portfolio.service';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-portfolio',
  imports: [FooterComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  portfolios: Portfolio[] = [];

  constructor(private portfolioService: PortfolioService){}

  ngOnInit() {
    this.portfolios = this.portfolioService.obtenerPortfolios();
  }
}
