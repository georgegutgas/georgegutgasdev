import { Component } from '@angular/core';
import { Portfolio } from './portfolio';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-portfolio',
  imports: [],
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
